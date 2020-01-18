import React from 'react';
import { Link } from 'gatsby';

import ExternalLink from 'src/components/ExternalLink';
import social from 'src/data/social';

const Footer = ({ siteTitle }) => {
  return (
    <footer className="site-footer">
      <span className="copyright">Copyright © {new Date().getFullYear()}</span>
      <span>
        <Link to="/">{siteTitle}</Link>
      </span>
      <div>
        {social.map(data => {
          const { title, url } = data;
          return (
            <ExternalLink key={url} className="footer-social" url={url}>
              {title}
            </ExternalLink>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
