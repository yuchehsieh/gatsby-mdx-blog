import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import PostList from "../components/postList"

export default ({ data }) => {

  const posts = data.posts.edges;

  console.log(posts);

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
                  srcSet
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