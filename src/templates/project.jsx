import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/structure/layout"
import Seo from "../components/common/seo"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Typography,
  ImageList,
  ImageListItem,
  Dialog,
  useMediaQuery,
} from "@mui/material"
import ZoomInIcon from "@mui/icons-material/ZoomIn"
import { useState } from "react"
import useInView from "../components/common/hooks/useInView"

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const images = data.allFile

  const isMobile = useMediaQuery("(max-width:600px)")
  const projectContentRef = useInView()
  const imagesRef = useInView()

  const [imageView, setImageView] = useState(undefined)
  const [open, setOpen] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)

  const onSetImageView = image => {
    if (image) setImageView(image)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Layout>
      <section
        ref={projectContentRef}
        className="tw-h-screen tw-py-6 tw-fade-up md:tw-py-0"
      >
        <div className="tw-container tw-flex tw-h-full tw-flex-col tw-content-center tw-items-center tw-justify-center">
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" className="tw-text-white" />
            }
            aria-label="breadcrumb"
            style={{ fontFamily: "Outfit", letterSpacing: "0.1em" }}
          >
            <AniLink
              cover
              bg="#024950"
              to={`/projects`}
              className="tw-uppercase tw-text-inherit tw-text-white"
            >
              <span style={{ textDecoration: "underline" }}>Projects</span>
            </AniLink>
            <Typography
              className="tw-text-[12px] tw-uppercase md:tw-text-[19px]"
              style={{ fontFamily: "Outfit", color: "#f0f0f0" }}
            >
              {project.title}
            </Typography>
          </Breadcrumbs>
          <h1
            className="tw-text-center tw-text-5xl tw-font-bold tw-uppercase tw-tracking-widest tw-text-white"
            style={{ padding: "20px 0" }}
          >
            {project.title}
          </h1>
          <p className="tw-px-0 tw-text-center tw-text-lg tw-tracking-wider tw-text-white md:tw-px-40">
            {project.description}
          </p>
        </div>
      </section>

      <div
        ref={imagesRef}
        className="tw-container tw-flex tw-flex-col tw-space-y-4 tw-px-0 tw-py-12 tw-text-white tw-fade-up md:tw-px-[200px]"
      >
        <ImageList variant="masonry" cols={isMobile ? 1 : 2} gap={18}>
          {project.images.map((item, index) => {
            const image = images.edges.find(
              edge => edge.node.relativePath === item,
            )

            if (image) {
              return (
                <ImageListItem
                  className="tw-relative hover:tw-shadow-lg hover:tw-shadow-secondary_light"
                  key={item}
                >
                  <GatsbyImage
                    className="tw-h-full tw-w-auto tw-cursor-pointer tw-object-cover"
                    image={image.node.childImageSharp.gatsbyImageData}
                    style={{ width: "100%", height: "auto" }}
                    formats={["auto", "webp"]}
                    loading="lazy"
                    alt={project.title}
                  />

                  <div
                    className="tw-overlay tw-absolute tw-left-0 tw-top-0 tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50 tw-text-center tw-text-white tw-opacity-0 tw-transition-all hover:tw-opacity-100"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {hoveredProject === index && (
                      <div className="tw-flex tw-flex-col tw-space-y-3">
                        <ZoomInIcon
                          className="tw-cursor-pointer !tw-text-[40px] tw-text-secondary_light"
                          onClick={() => onSetImageView(image)}
                        />
                      </div>
                    )}
                  </div>
                </ImageListItem>
              )
            }

            return <></>
          })}
        </ImageList>

        <Dialog
          className="tw-flex tw-items-center tw-justify-center"
          fullWidth
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          scroll="body"
        >
          {imageView ? (
            <GatsbyImage
              className="tw-h-full tw-w-auto tw-object-cover"
              image={imageView?.node.childImageSharp.gatsbyImageData}
              style={{ width: "100%", height: "auto" }}
              formats={["auto", "webp"]}
              loading="lazy"
              alt={project.title}
            />
          ) : (
            <></>
          )}
        </Dialog>
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const project = data.projectsJson

  return <Seo title={project?.title} />
}

export const query = graphql`
  query ($slug: String!) {
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
`

export default ProjectTemplate
