import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import {
  categoryFilter,
  getFormattedCategories,
  getFormattedTags,
} from 'src/utils/dataUtils';

/** posts -> already filtered edges */
/** totalCount -> data.allMarkdownRemark.totalCount */
const PostsList = ({ data, category, title }) => {
  if (!data) {
    return null;
  }

  const postData = data.allMarkdownRemark.edges;
  const posts = category ? postData.filter(categoryFilter(category)) : postData;

  return (
    <div className="posts-list">
      <div className="posts-category">
        <h2>{title} Posts </h2>
        <span>({posts.length})</span>
      </div>
      {posts.map(({ node }) => {
        const { id, fields, frontmatter, excerpt } = node;
        const url = fields.slug;

        return (
          <article key={id} className="post-wrapper">
            <header className="post-title">
              <h3>
                <Link to={url}>{frontmatter.title}</Link>
              </h3>
            </header>
            <Link to={url}>
              <div className="post-info-sm">
                <span>{frontmatter.date} | </span>
                <span className="post-categories">
                  {getFormattedCategories(frontmatter)}
                </span>
                {getFormattedTags(frontmatter).map(tag => (
                  <span className="post-tag">{tag}</span>
                ))}
              </div>
              <section>
                <p
                  className="post-excerpt"
                  dangerouslySetInnerHTML={{
                    __html: frontmatter.description || excerpt,
                  }}
                />
              </section>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            author
            categories
            date(formatString: "MMMM DD, YYYY")
            description
            tags
            title
            type
          }
          fields {
            slug
          }
          excerpt(pruneLength: 400)
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={query}
    render={data => <PostsList data={data} {...props} />}
  />
);
