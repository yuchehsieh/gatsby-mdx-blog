import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import PostList from "../components/postList"

export default ({ data }) => {

  const posts = data.posts.edges;

  return (
    <Layout>
      Hello world!
      <div>
        <Link to="/post">POST MDX</Link>
      </div>
      <PostList posts={posts}/>
    </Layout>

  )
}


export const getPosts = graphql`
  query {
    posts: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            author
            title
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date(formatString: "MMMM Do, YYYY ")
          }
          excerpt
        }
      }
    }
  }
`