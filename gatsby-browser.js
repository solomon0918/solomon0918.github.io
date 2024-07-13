/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import { CookiesProvider } from "react-cookie"
import ThemeProvider from "./src/components/common/context/ThemeContext"
import "./src/styles/global.css"
import React from "react"

export const wrapRootElement = ({ element }) => (
  <CookiesProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </CookiesProvider>
)
