import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2.js'

import "../style/main.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    
      <div>
        <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
        <div style={{padding: "0 20vw"}}>
      
        <h1 className="align-center">{post.frontmatter.title}</h1>
   
        <div style={{color: "white"}} dangerouslySetInnerHTML={{ __html: post.html }} />
     </div>
        </Layout>
      </div>
  
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
   
      }
    }
  }
`