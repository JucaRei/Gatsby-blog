import React from "react"
//import { Link } from 'gatsby'  // componente do gatsby para lidar com links

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      background="#5f38fc"
      category="Misc"
      date="20 de Agosto de 2020"
      timeToRead="5"
      title="Nostrud eu nisi dolore in id labore."
      description="Commodo in mollit laboris eu laboris Lorem in sit excepteur ea voluptate."
    />
  </Layout>
)

export default IndexPage
