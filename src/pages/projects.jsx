import * as React from "react"
import { useState } from "react"
import Layout from "../components/structure/layout"
import Seo from "../components/common/seo"
import { Link, graphql } from "gatsby"
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow"
import { GatsbyImage } from "gatsby-plugin-image"
import useInView from "../components/common/hooks/useInView"

const ProjectsPage = ({ data }) => {
  const projects = data.allProjectsJson
  const images = data.allFile

  const isMobile = useMediaQuery("(max-width:600px)")

  const projectsRef = useInView()
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <Layout>
      <section className="tw-container tw-mx-auto tw-py-20">
        <div className="tw-flex tw-flex-col">
          <div className="tw-relative">
            <div className="tw-absolute tw--left-6 tw-hidden tw-h-full tw-w-4 tw-bg-secondary sm:tw-block"></div>
            <h1 className="tw-text-5xl tw-font-bold tw-uppercase">
              My Projects
            </h1>
          </div>
          <p className="tw-w-full tw-text-base tw-uppercase md:tw-w-[80%]">
            Delivering excellence across diverse industries through versatile
            and impactful projects.
          </p>
        </div>
      </section>
      <div
        ref={projectsRef}
        className="tw-delay-400 tw-container tw-flex tw-flex-col tw-space-y-4 tw-px-0 tw-py-12 tw-text-white tw-fade-up md:tw-px-[200px]"
      >
        <ImageList variant="masonry" cols={isMobile ? 1 : 2} gap={32}>
          {projects.edges.map(({ node }, index) => {
            const image = images.edges.find(
              edge => edge.node.relativePath === node.image,
            )

            if (image) {
              return (
                <ImageListItem
                  key={node.id}
                  className="tw-relative hover:tw-shadow-lg hover:tw-shadow-secondary_light"
                >
                  <GatsbyImage
                    className="tw-w-auto tw-object-cover"
                    image={image.node.childImageSharp.gatsbyImageData}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    formats={["auto", "webp"]}
                    loading="lazy"
                    alt={node.title}
                  />

                  <div
                    className="tw-overlay tw-absolute tw-left-0 tw-top-0 tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50 tw-text-center tw-text-white tw-opacity-0 tw-transition-all hover:tw-opacity-100"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {hoveredProject === index && (
                      <div className="tw-flex tw-flex-col tw-space-y-3">
                        <h4 className="tw-text-xl">{node.title}</h4>
                        <Link to={`/projects/${node.slug}`}>
                          <DoubleArrowIcon className="!tw-text-[40px] tw-text-secondary_light" />
                        </Link>
                      </div>
                    )}
                  </div>
                </ImageListItem>
              )
            }

            return <></>
          })}
        </ImageList>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsFeaturedQuery {
    allProjectsJson {
      edges {
        node {
          id
          company
          image
          slug
          title
        }
      }
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

export const Head = () => <Seo title="My Projects" />

export default ProjectsPage
