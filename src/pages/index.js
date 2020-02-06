import React from "react";
import Layout from "../components/layout";
import { Link } from 'gatsby';
import PostList from "../components/postList"

export default () =>
  <Layout>
    Hello world!
    <div>
      <Link to="/post">POST MDX</Link>
    </div>
    <PostList/>
  </Layout>
