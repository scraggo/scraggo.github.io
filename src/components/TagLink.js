import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';

import { capitalizeWords } from 'src/utils/stringUtils';

const contentMap = {
  post: ({ text }) => <span className="post-info-sm post-tag">{text}</span>,
  count: ({ count, text }) => <span>{`${text} (${count})`}</span>,
  postList: ({ text }) => <span className="post-tag">{text}</span>,
};

const TagLink = ({ count, text, variant }) => {
  const capText = capitalizeWords(text);
  const contentFunc = contentMap[variant];

  if (!contentFunc) {
    throw new Error(`props.variant ${variant} not in contentMap.`);
  }

  return (
    <Link to={`/tags/${kebabCase(text)}/`}>
      {contentFunc({ count, text: capText })}
    </Link>
  );
};

export default TagLink;
