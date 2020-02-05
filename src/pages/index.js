import React from "react";
import Layout from "../components/layout";
import { Link } from 'gatsby';

export default () =>
  <Layout>
    Hello world!
    <div>
      <Link to="/post">POST MDX</Link>
    </div>
  </Layout>
