const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions


  /**
   * in nodeJS, need to run graphql as a function
   * be aware of the parentheses
   */
  const response = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      } 
    }
  `)

  const { data: { allMdx: { edges: posts } } } = response

  posts.forEach(({ node }) => {
    const { slug } = node.frontmatter;
    createPage({
      path: `${slug}`,
      context: {
        slug: slug
      },
      component: path.resolve("src/templates/post-template.js"),
    })
  })

}