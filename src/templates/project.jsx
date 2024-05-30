import * as React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout';
import Seo from "../components/seo"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";
import { 
  Typography, 
  ImageList, 
  ImageListItem,
  Dialog
} from '@mui/material';
import { useState } from 'react';

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  const images = data.allFile;

  const [imageView, setImageView] = useState(undefined);
  const [open, setOpen] = useState(false);

  const onSetImageView = (image) => {
    if (image) setImageView(image)
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <section className="h-screen">
        <div className="container h-full flex flex-col items-center content-center justify-center">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" className="text-white" />}
            aria-label="breadcrumb"
            style={{ fontFamily:  'Nunito', letterSpacing: '0.1em' }}
          >
            <AniLink 
              cover 
              bg="#004AAD"
              to={`/projects`}
              className=" text-white uppercase text-inherit"
            >
              <span style={{ textDecoration: 'underline' }}>Projects</span>
            </AniLink>
            <Typography className="uppercase text-[12px] md:text-[19px]" style={{ fontFamily:  'Nunito', color: '#f0f0f0' }}>
              {project.title}
            </Typography>
          </Breadcrumbs>
          <h1 className="text-[40px] md:text-[70px] font-bold uppercase text-white text-center tracking-widest">{project.title}</h1>
          <h6 className="text-white text-center text-[16px] md:text-[25px] px-0 md:px-40 tracking-wider">{project.description}</h6>
        </div>
      </section>

      <div className="container flex flex-col text-white py-5 space-y-4 px-0 md:px-[200px]">
        <ImageList
          variant="masonry"
          cols={2} gap={18}
        >
          {project.images.map((item) => {

            const image = images.edges.find(edge => edge.node.relativePath === item);
            
            if (image) {
              return ( 
                <ImageListItem key={item} onClick={() => onSetImageView(image)}>
                  <GatsbyImage
                    className="h-full w-auto object-cover cursor-pointer"
                    image={image.node.childImageSharp.gatsbyImageData}
                    style={{ width: "100%", height: "auto" }}
                    formats={["auto", "webp"]}
                    loading="lazy"
                    alt={project.title} 
                    
                  />
                </ImageListItem>
              )
            }

            return <></>;
          })}
        </ImageList>

        <Dialog 
          className="flex items-center justify-center "
          fullWidth
          maxWidth="lg"
          open={open}
          onClose={handleClose} 
          scroll="body"
        >
          {imageView ? (
            <GatsbyImage
              className="h-full w-auto object-cover"
              image={imageView?.node.childImageSharp.gatsbyImageData}
              style={{ width: "100%", height: "auto" }}
              formats={["auto", "webp"]}
              loading="lazy"
              alt={project.title} 
            />
          ) : <></>}
        </Dialog>

        {/* <Modal
          className="flex items-center justify-center "
          open={open}
          onClose={handleClose}
          closeAfterTransition
          Backdrop
        > */}
          {/* <Fade in={open} timeout={500} className="outline-none">
            <img
              src={image}
              alt="asd"
              style={{ maxHeight: "90%", maxWidth: "90%" }}
            />
            {imageView ? (
              <GatsbyImage
                className="h-full w-auto object-cover"
                image={imageView?.node.childImageSharp.gatsbyImageData}
                style={{ width: "100%", height: "auto" }}
                formats={["auto", "webp"]}
                loading="lazy"
                alt={project.title} 
              />
            ) : <></>}
          </Fade> */}
          
        {/* </Modal> */}
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => {
  const project = data.projectsJson;

  return <Seo title={project?.title} />;
}

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      images
    }
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

export default ProjectTemplate;