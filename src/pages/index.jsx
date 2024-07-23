import * as React from "react"

import Layout from "../components/structure/layout"
import Seo from "../components/common/seo"
import { Link, graphql } from "gatsby"
import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow"
import meImage from "../images/image-profile.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
import useInView from "../components/common/hooks/useInView"

import LaravelSVG from "../assets/laravel.svg"
import ReactSVG from "../assets/react-icon.svg"
import VueSVG from "../assets/vue.svg"
import TailwindSVG from "../assets/tailwind-css.svg"
import MySQLSVG from "../assets/mysql-original-wordmark.svg"
import JavascriptSVG from "../assets/javascript-js.svg"
import HtmlSVG from "../assets/file-type-html.svg"
import CssSVG from "../assets/file-type-css.svg"
import { useState } from "react"
import Testimonial from "../components/Testimonial"

const IndexPage = ({ data }) => {
  const projects = data.allProjectsJson
  const testimonials = data.allTestimonialsJson
  const images = data.allFile

  const aboutRef = useInView()
  const projectsRef = useInView()
  const mySkillsRef = useInView()
  const myTestimonialsRef = useInView()

  const [hoveredProject, setHoveredProject] = useState(null)

  const skills = [
    {
      title: "Laravel",
      image: <LaravelSVG />,
    },
    {
      title: "React",
      image: <ReactSVG />,
    },
    {
      title: "Vue",
      image: <VueSVG />,
    },
    {
      title: "Tailwind CSS",
      image: <TailwindSVG />,
    },
    {
      title: "MySQL",
      image: <MySQLSVG />,
    },
    {
      title: "Javascript",
      image: <JavascriptSVG />,
    },
    {
      title: "HTML",
      image: <HtmlSVG />,
    },
    {
      title: "CSS",
      image: <CssSVG />,
    },
  ]

  return (
    <Layout>
      <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center tw-pt-12 md:tw-pt-0">
        <div
          ref={aboutRef}
          className="tw-grid tw-grid-cols-1 tw-place-items-center tw-gap-4 tw-fade-up md:tw-grid-cols-3"
        >
          <div className="tw-col-span-2">
            <div className="tw-ml-0 tw-space-y-6 md:tw-ml-14">
              <h2 className="tw-text-4xl tw-font-bold tw-uppercase">Hi, I'm</h2>
              <div className="tw-mr-15 tw-text-center">
                <div className="tw-relative">
                  <div className="tw-absolute tw-left-4 tw-hidden tw-h-full tw-w-4 tw-bg-primary_dark sm:tw-block dark:tw-bg-secondary"></div>
                  <h1 className="tw-text-5xl tw-font-bold tw-uppercase">
                    Erwin Mark Añora
                  </h1>
                  <h3 className="tw-mb-2 tw-text-2xl tw-font-semibold tw-uppercase">
                    Full Stack Web Developer
                  </h3>
                </div>
                <p className="tw-text-base tw-uppercase">
                  Experienced Full Stack Developer with nearly 8 years of
                  hands-on experience <br /> across diverse industries including
                  mining, healthcare, <br /> construction, and law firms.
                </p>
                <div className="tw-mt-4 tw-flex tw-justify-center tw-space-x-3">
                  <a href="https://www.facebook.com/erwin.mark.75">
                    <FacebookIcon
                      className="tw-transition tw-duration-300 tw-ease-in-out hover:tw--translate-y-1"
                      alt="facebook icon"
                    />
                  </a>
                  <a href="https://www.instagram.com/nuevosapientum/">
                    <InstagramIcon
                      className="tw-transition tw-duration-300 tw-ease-in-out hover:tw--translate-y-1"
                      alt="instagram icon"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/erwin-mark-anora/">
                    <LinkedInIcon
                      className="tw-transition tw-duration-300 tw-ease-in-out hover:tw--translate-y-1"
                      alt="linkedin icon"
                    />
                  </a>
                  <a href="https://github.com/solomon0918">
                    <GitHubIcon
                      className="tw-transition tw-duration-300 tw-ease-in-out hover:tw--translate-y-1"
                      alt="github icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={meImage}
              className="tw-transition tw-ease-in-out hover:tw--translate-y-1"
              width={450}
              loading="eager"
              alt="Erwin Mark"
            />
          </div>
        </div>
      </div>

      <div
        ref={myTestimonialsRef}
        className="md:pb-0 tw-container tw-mx-auto tw-pb-40 tw-fade-up"
      >
        <div className="tw-flex tw-justify-center tw-space-y-12">
          <div className="tw-relative">
            <div className="tw-absolute tw--left-6 tw-hidden tw-h-full tw-w-4 tw-bg-primary_dark sm:tw-block dark:tw-bg-secondary"></div>
            <h1 className="tw-text-5xl tw-font-bold tw-uppercase tw-tracking-wider">
              Testimonials
            </h1>
          </div>
        </div>

        {/* List of Testimonials */}
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 tw-pt-0 md:tw-grid-cols-2 md:tw-pt-28">
          {testimonials.edges.map(({ node }) => {
            const image = images.edges.find(
              edge => edge.node.relativePath === node.image,
            )

            if (!image) return <></>

            return (
              <Testimonial
                image={image}
                name={node.name}
                description={node.description}
              />
            )
          })}
        </div>
      </div>

      <div
        ref={projectsRef}
        className="tw-container tw-mx-auto tw-py-20 tw-fade-up md:tw-py-0"
      >
        <div className="tw-space-y-12">
          <div className="tw-relative">
            <div className="tw-absolute tw--left-6 tw-hidden tw-h-full tw-w-4 tw-bg-primary_dark sm:tw-block dark:tw-bg-secondary"></div>
            <h1 className="tw-text-5xl tw-font-bold tw-uppercase">
              Recent Projects
            </h1>
          </div>

          {/* List of featured projects */}
          <div className="tw-pt-0 md:tw-pt-28">
            <div className="tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-3">
              {projects.edges.map(({ node }, index) => {
                const image = images.edges.find(
                  edge => edge.node.relativePath === node.image,
                )

                if (image) {
                  return (
                    <div key={node.id} className="tw-relative">
                      <GatsbyImage
                        className="tw-w-auto tw-object-cover tw-shadow-lg tw-shadow-primary_dark dark:tw-shadow-none"
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
                        role="presentation"
                        className="tw-overlay tw-absolute tw-left-0 tw-top-0 tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50 tw-text-center tw-text-white tw-opacity-0 tw-transition-all hover:tw-opacity-100"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        {hoveredProject === index && (
                          <div className="tw-flex tw-flex-col tw-space-y-3">
                            <p className="tw-text-base">{node.title}</p>
                            <Link to={`/projects/${node.slug}`}>
                              <DoubleArrowIcon className="tw-text-3xl tw-text-secondary_light" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                }

                return <></>
              })}
            </div>
          </div>
          <div className="tw-flex tw-justify-center">
            <AniLink paintDrip hex="#024950" to="/projects">
              <h6 className="tw-border-b-8 tw-border-secondary tw-text-lg tw-font-bold tw-uppercase tw-transition-all hover:tw-border-primary">
                Show More
              </h6>
            </AniLink>
          </div>
        </div>
      </div>

      <div
        ref={mySkillsRef}
        className="md:py-0 tw-container tw-mx-auto tw-py-40 tw-fade-up"
      >
        <div className="tw-flex tw-justify-center tw-space-y-12">
          <div className="tw-relative">
            <div className="tw-absolute tw--left-6 tw-hidden tw-h-full tw-w-4 tw-bg-primary_dark sm:tw-block dark:tw-bg-secondary"></div>
            <h1 className="tw-text-5xl tw-font-bold tw-uppercase">My Skills</h1>
          </div>
        </div>

        {/* Show List of Skills */}
        <div className="tw-grid tw-grid-cols-1 tw-gap-10 tw-pt-28 md:tw-grid-cols-3">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded-md tw-bg-primary tw-py-12 tw-shadow-sm tw-shadow-secondary tw-transition-all hover:tw-shadow-lg hover:tw-shadow-primary_dark hover:dark:tw-shadow-secondary"
              >
                {skill.image}
                <h6 className="tw-pt-6 tw-text-center tw-text-lg tw-uppercase tw-text-white">
                  {skill.title}
                </h6>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsFeaturedQuery {
    allProjectsJson(filter: { featured: { eq: true } }) {
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
    allTestimonialsJson {
      edges {
        node {
          id
          image
          name
          description
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

export const Head = () => <Seo title="Home" />

export default IndexPage
