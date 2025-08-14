/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Container } from "@mui/material"
import Footer from "./footer"
import AnnouncementBanner from "../AnnouncementBanner"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <AnnouncementBanner />
      <Container maxWidth="xl">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default Layout
