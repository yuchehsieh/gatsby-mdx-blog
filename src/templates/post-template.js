import React from "react"
import styles from '../css/postTemplate.module.css';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PostTemplate = ({pageContext}) => {
  console.log(pageContext);

  return (
    <div>
      this is the post template!
    </div>
  )
}

export default PostTemplate