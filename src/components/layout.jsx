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
import { useEffect } from "react"
import Footer from "./footer"

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

  useEffect(() => {
    // Remove styles from elements with specific classes when the component mounts
    const removeStyles = () => {
      const elements = document.querySelectorAll(".tl-wrapper.tl-wrapper--mount.tl-wrapper-status--entered");
      elements.forEach(element => {
        element.removeAttribute("style");
      });
    };

    removeStyles();

    // Cleanup function
    return () => {
      // Optionally, you can reapply styles or perform other cleanup tasks when the component unmounts
    };
  }, [children]);

  return (
    <>
      <Container maxWidth="xl">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer></Footer>
      </Container>
    </>
  )
}

export default Layout
