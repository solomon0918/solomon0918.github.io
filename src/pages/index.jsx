import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box, Grid } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const IndexPage = () => {
  return (
  <Layout>
    <Box sx={{ flexGrow: 1 }} className="flex justify-center items-center min-h-screen">
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <div className="text-white">
            <h3 className="text-[32px]">Hi, I'm</h3>
            <div className="mr-16 text-center">
              <h2 className="text-[50px] font-bold uppercase">Erwin Mark Añora</h2>
              <h4 className="text-[23px] font-semibold mb-2">Full Stack Web Developer</h4>
              <p className="text-[20px]">
              Experienced Full Stack Developer with nearly 8 years of hands-on experience across diverse industries including mining, healthcare, construction, and law firms.
              </p>
              <div className="flex justify-center space-x-3 mt-4">
                <a href="#">
                  <FacebookIcon className="transition ease-in-out hover:text-secondary hover:-translate-y-1 duration-300" />
                </a>
                <a href="#">
                  <InstagramIcon className="transition ease-in-out hover:text-secondary hover:-translate-y-1 duration-300" />
                </a>
                <a href="#">
                  <LinkedInIcon className="transition ease-in-out hover:text-secondary hover:-translate-y-1 duration-300" />
                </a>
                <a href="#">
                  <GitHubIcon className="transition ease-in-out hover:text-secondary hover:-translate-y-1 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="flex justify-center">
          <div className="border-primary_light border-4 rounded-xl w-fit p-12 ">
            <StaticImage src="../images/portfolio-personal.png" loading="eager" alt="Erwin Mark Photo" className="rounded-md shadow-lg shadow-black"  />
          </div>
        </Grid>
      </Grid>
    </Box>
  </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
