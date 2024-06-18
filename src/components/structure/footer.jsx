import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../../images/logo.png"

const Footer = () => {
  return (
    <footer className="tw-border-t-2 tw-border-primary tw-py-8">
      <div className="tw-container tw-mx-auto">
        <div className="tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-3">
          <div className="tw-flex tw-flex-col tw-space-y-4">
            <img src={logo} className="tw-mr-2" style={{ width: "65px" }} />

            <p className="tw-text-base tw-uppercase">
              This is a personal portfolio <br /> website of Erwin Mark Añora
            </p>
          </div>
          <div className="tw-col-span-2">
            <div className="tw-flex tw-flex-col tw-space-y-12">
              <div className="tw-flex tw-flex-col tw-justify-between md:tw-flex-row">
                <div className="tw-relative">
                  <div className="tw-absolute tw--left-3 tw-hidden tw-h-full tw-w-2 tw-bg-secondary sm:tw-block"></div>
                  <h6 className="tw-text-lg tw-uppercase">Quick Links</h6>
                </div>
                <AniLink paintDrip hex="#024950" to="/">
                  Home
                </AniLink>
                <AniLink paintDrip hex="#024950" to="/about">
                  About
                </AniLink>
                <AniLink paintDrip hex="#024950" to="/blog">
                  Blog
                </AniLink>
                <AniLink paintDrip hex="#024950" to="/projects">
                  Projects
                </AniLink>
                <a
                  href="https://drive.google.com/file/d/1ShWFHPyZQJ4lFAu_AdO2oXgmeiRgYOKD/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
              <p className="tw-text-base tw-text-white">
                © {new Date().getFullYear()} Erwin Mark Anora E-Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
