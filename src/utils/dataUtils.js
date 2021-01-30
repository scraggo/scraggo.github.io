import { capitalizeWords } from 'src/utils/stringUtils';

/**
 * Get a filter callback for category
 * @param {string} category
 * @returns {function} filter
 */
export const categoryFilter = category => data =>
  data.node.frontmatter.categories.includes(category);

export const getFormattedCategories = frontmatter => {
  const { categories } = frontmatter;
  return categories
    ? categories.map(capitalizeWords).join(', ')
    : 'Uncategorized';
};

export const getFormattedTags = frontmatter => {
  const { tags } = frontmatter;
  return tags ? tags.map(capitalizeWords) : [];
};

/**
 * Get image data from graphQl query
 * @param {object} config
 * @param {object} config.data -> the graphQl query result
 * @param {string} config.filename
 * @param {string} config.sizingStrategy -> oneOf('fixed', 'fluid')
 * @returns {object|undefined}
 */
export const getImage = ({ data, filename, sizingStrategy }) => {
  // data.allFile.edges -> array
  // data.allFile.edges[0].node.relativePath -> tech-projects/filename
  // data.allFile.edges[0].node.childImageSharp.fluid -> object base 64
  const found = data.allFile.edges.find(image =>
    image.node.relativePath.endsWith(filename)
  );
  if (found) {
    return found.node.childImageSharp[sizingStrategy];
  }
};
