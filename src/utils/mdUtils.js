import React from 'react';
import { Link } from 'gatsby';

import ExternalLink from 'src/components/ExternalLink';

// usage: components={{ a: internalLink }}
export const internalLink = ({ href, children }) => (
  <Link to={href}>{children}</Link>
);

// usage: components={{ a: externalLink }}
export const externalLink = ({ href, children }) => (
  <ExternalLink url={href}>{children}</ExternalLink>
);

/**
 * usage: components={{ p: pToAnyWithClassName({ params }) }}
 * @param {Object} config
 * @param {string} config.className
 * @param {string} config.Comp
 * @returns {Function} react-markdown renderer -> {JSX}
 */
export const pToAnyWithClassName = ({ className, Comp = 'span' }) => ({
  children,
}) => {
  return <Comp className={className}>{children}</Comp>;
};
