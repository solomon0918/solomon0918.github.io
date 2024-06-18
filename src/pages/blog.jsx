import * as React from "react"
import Layout from "../components/structure/layout"
import Seo from "../components/common/seo"
import ComingSoonPage from "./coming-soon"

const BlogPage = () => {
  return (
    <Layout>
      <ComingSoonPage></ComingSoonPage>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage
