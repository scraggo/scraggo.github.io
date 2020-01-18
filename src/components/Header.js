import React from 'react';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';
import { Dropdown } from 'semantic-ui-react';

const addKey = arr => arr.map((item, idx) => ({ ...item, key: idx }));

const blogLinks = addKey([
  { text: 'All', to: '/' },
  { text: 'Tech', to: '/tech/' },
  { text: 'Music', to: '/music/' },
  { text: 'Other', to: '/other/' },
]);

const musicLinks = addKey([
  { text: 'Discography', to: '/music/discography' },
  { text: 'Teaching', to: '/music/teaching-resources' },
  { text: 'Blog', to: '/music/' },
]);

const techLinks = addKey([
  { text: 'Projects', to: '/tech/projects' },
  { text: 'Blog', to: '/tech/' },
]);

const DropdownLink = ({ options, text }) => {
  return (
    <li className="list-link">
      <Dropdown text={text} simple item>
        <Dropdown.Menu>
          {options.map(linkObj => {
            const { key, text: linkText, to } = linkObj;
            return (
              <Link to={to} key={key} className="dropdown-list-link">
                <Dropdown.Item>{linkText}</Dropdown.Item>
              </Link>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
};

const ListLink = props => (
  <li className="list-link">
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ siteTitle }) => {
  return (
    <header className="site-header">
      <div className="site-title-nav-container">
        <div className="site-logo">
          <Link to={'/'}>
            <img src="/img_copy/site/scraggo-logo.jpg" alt="site-logo" />
          </Link>
        </div>
        <div className="site-banner-nav">
          <div className="site-banner">
            <Link to={'/'} className="">
              <img src="/img_copy/site/scraggo-banner.png" alt="site-logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <ListLink to="/about/">About</ListLink>
              <DropdownLink text="Tech" options={techLinks} />
              <DropdownLink text="Music" options={musicLinks} />
              <DropdownLink text="Blog" options={blogLinks} />
              <ListLink to="/contact/">Contact</ListLink>
              {
                // <ListLink to="/my-files/">My Files</ListLink>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
