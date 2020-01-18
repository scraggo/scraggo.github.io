import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

export default ({ children, className }) => {
  /** Hook to use graphQl outside of pages */
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const siteTitle = data.site.siteMetadata.title;
  return (
    <div className="site-layout">
      <Header siteTitle={siteTitle} />
      <main className={className}>{children}</main>
      <Footer siteTitle={siteTitle}></Footer>
    </div>
  );
};
