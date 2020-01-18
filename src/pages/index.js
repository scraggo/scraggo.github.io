import React from 'react';
// import { Link, graphql } from 'gatsby';
import Layout from 'src/components/Layout';
import PostsList from 'src/components/PostsList';
import SEO from 'src/components/SEO';

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <PostsList title="All" />
  </Layout>
);
