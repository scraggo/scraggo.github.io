import React from 'react';

export default ({ children, url, ...rest }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
);
