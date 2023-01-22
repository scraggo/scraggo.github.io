import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import ExternalLink from 'src/components/ExternalLink';
import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

import { myProjects, openSource } from 'src/data/tech-projects';
import { getImage } from 'src/utils/dataUtils';

import './tech-projects.scss';

const getImageIfExists = ({ data, filename }) => {
  if (!filename) {
    return;
  }
  if (filename.startsWith('http')) {
    return { external: filename };
  }
  return getImage({ data, filename, sizingStrategy: 'fluid' });
};

const getProjects = ({ data }) =>
  myProjects.map((project, projectIdx) => {
    const {
      deployUrl,
      description,
      imgSrc,
      links,
      technology,
      title,
    } = project;

    const img = getImageIfExists({ data, filename: imgSrc });

    return (
      <div className="project">
        <div key={title}>
          <h3>
            <ExternalLink url={deployUrl}>{title}</ExternalLink>
          </h3>
          <div className="flex portfolio-wrapper">
            <div className="portfolio-text">
              <p>{description}</p>
              <p>
                <strong>Technology: </strong>
                {technology}
              </p>
              <ul>
                {links.map(link => {
                  const isInternalLink = link.url.startsWith('/');
                  return (
                    <li key={link.title}>
                      {isInternalLink ? (
                        <Link to={link.url}>{link.title}</Link>
                      ) : (
                        <ExternalLink key={link.url} url={link.url}>
                          {link.title}
                        </ExternalLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            {img && (
              <div className="portfolio-img">
                <ExternalLink url={deployUrl}>
                  {img.external ? (
                    <img
                      // className="site-logo"
                      src={img.external}
                      alt={title}
                    />
                  ) : (
                    <Img fluid={img} alt={title} />
                  )}
                </ExternalLink>
              </div>
            )}
          </div>
        </div>
        <hr />
      </div>
    );
  });

const getOpenSource = () => (
  <div className="margin-top-lg">
    <h2>Open Source Contributions</h2>
    <ul>
      {openSource.map(item => (
        <li key={item.title} className="margin-top-md">
          <ExternalLink url={item.url}>{item.title}</ExternalLink> -{' '}
          {item.description}
        </li>
      ))}
    </ul>
  </div>
);

export default ({ data }) => {
  // console.log(data);
  return (
    <Layout className="tech-projects-wrapper">
      <SEO title="Tech Projects" />
      <div className="text-wrapper">
        <h1>Tech Projects</h1>
        <div className="margin-top-lg">{getProjects({ data })}</div>
        {getOpenSource()}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { relativePath: { glob: "tech-projects/*" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
