import React from "react"
import { Link } from 'gatsby'  // componente do gatsby para lidar com links

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
  </Layout>
)

export default IndexPage
