import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { graphql } from 'gatsby'
import { Divider, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from "gatsby-plugin-image";
import projects from './projects.json';

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <section className="h-screen">
        <div className="container h-full flex flex-col items-center content-center justify-center">
          <h1 className="text-[40px] md:text-[70px] font-bold uppercase text-white text-center tracking-widest">My Projects</h1>
          <h6 className="text-white text-center text-[16px] md:text-[25px] px-0 md:px-40 tracking-wider">Delivering excellence across diverse industries through versatile and impactful projects.</h6>
        </div>
      </section>
      <Divider />
      <div className="container flex flex-col text-white py-5 space-y-4 px-0 md:px-[200px]">
        {projects.map((project, index) => {
          const item = data.allFile.edges.find(edge => edge.node.relativePath === project.image);

          if (item) {
            return (
              <div className="py-32" key={index}>
                <Card variant="outlined" className="transition duration-200 ease-in-out transform hover:drop-shadow-2xl hover:shadow-2xl">
                  <div className='h-[550px] w-auto overflow-hidden'>
                    <GatsbyImage
                      className="rounded-md h-full w-auto object-cover"
                      image={item.node.childImageSharp.gatsbyImageData}
                      style={{ width: "100%", height: "auto" }}
                      formats={["auto", "webp"]}
                      loading="lazy"
                      alt={project.title} 
                    />
                  </div>
                  
                  <CardContent>
                    <Typography variant="h5" className="uppercase font-bold">
                      {project.title}
                    </Typography>
                    <Typography variant="caption" className="uppercase" color="text.secondary">
                      {project.company}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>

                  <CardActions className="px-4 !pb-6">
                    <a href="#" className="transition ease-in-out border-2 border-primary px-3 py-1 hover:bg-transparent text-primary hover:bg-primary hover:text-white hover:-translate-y-1 rounded-md duration-300">Learn More</a>
                  </CardActions>
                </Card>    
              </div> 
            )
          }
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPageQuery {
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
`


export const Head = () => <Seo title="My Projects" />
 
export default ProjectsPage;