/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

import { CookiesProvider } from "react-cookie"
import ThemeProvider from "./src/components/common/context/ThemeContext"
import React from "react"

export const wrapRootElement = ({ element }) => (
  <CookiesProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </CookiesProvider>
)
