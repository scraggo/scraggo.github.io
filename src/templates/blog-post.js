import React from 'react';
import { Link, graphql } from 'gatsby';

import { getFormattedCategories, getFormattedTags } from 'src/utils/dataUtils';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

export default props => {
  const { data, pageContext } = props;

  const { previous, next } = pageContext;

  const post = data.markdownRemark;
  const { author, date, description, title } = post.frontmatter;

  return (
    <Layout className="blog-post-template">
      <SEO title={title} description={description || post.excerpt} />
      <article className="text-wrapper">
        <header>
          <h1>
            <Link to={post.fields.slug}>{title}</Link>
          </h1>
          <p className="post-info-sm color-grey">{date}</p>
          <p className="post-info-sm">Author: {author}</p>
          <span className="post-info-sm post-categories">
            {getFormattedCategories(post.frontmatter)}
          </span>
          {getFormattedTags(post.frontmatter).map(tag => (
            <span className="post-info-sm post-tag">{tag}</span>
          ))}
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <nav className="nav-prev-next">
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        author
        categories
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        title
      }
    }
  }
`;
