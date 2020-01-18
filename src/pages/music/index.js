import React from 'react';

import Layout from 'src/components/Layout';
import PostsList from 'src/components/PostsList';
import SEO from 'src/components/SEO';

export default () => (
  <Layout>
    <SEO title="Posts - Music" />
    <PostsList category="music" title="Music" />
  </Layout>
);
