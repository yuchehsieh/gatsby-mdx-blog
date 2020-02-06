import React from "react"
import styles from '../css/postTemplate.module.css';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from "../components/layout"

const PostTemplate = ({data}) => {

  const { body } = data.mdx;
  const { author, date, title, image}  = data.mdx.frontmatter;
  const mainImg = image.childImageSharp.fluid;

  return (
    <Layout>
      <section className={styles.template}>
        <Link to={"/"} className={styles.link}>back to all posts</Link>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <div className={styles.postImage}>
          <Image fluid={mainImg}/>
        </div>
        <div className={styles.content}>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </div>
      </section>
    </Layout>
  )
}

export const getPost = graphql`
  query ($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      frontmatter {
        author
        date(formatString: "MMMM Do, YYYY")
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default PostTemplate