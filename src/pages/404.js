import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from 'src/components/SEO';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Not found" />
        <h1>Not Found</h1>
        <p>
          The content you're looking for is not at this url. It may have been
          moved.
        </p>
        <p>
          Please visit one of the pages above and contact the site administrator
          if you still can't find what you're looking for.
        </p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
