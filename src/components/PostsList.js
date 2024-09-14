import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import TagLink from 'src/components/TagLink';
import { categoryFilter, getFormattedCategories } from 'src/utils/dataUtils';

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
        const tags = frontmatter.tags || [];
        const url = fields.slug;

        return (
          <article key={id} className="post-wrapper">
            <header className="post-title">
              <h3>
                <Link to={url}>{frontmatter.title}</Link>
              </h3>
            </header>
            <div className="post-info-sm flex flex-wrap">
              <div>
                <Link to={url}>{frontmatter.date}</Link>
                <span className="v-divider">|</span>
              </div>
              <span className="post-categories">
                {getFormattedCategories(frontmatter)}
              </span>
              {tags.map(tag => (
                <TagLink key={tag} text={tag} variant="postList" />
              ))}
            </div>
            <Link to={url}>
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
