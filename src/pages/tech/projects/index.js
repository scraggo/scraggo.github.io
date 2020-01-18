import React from 'react';
import { graphql } from 'gatsby';
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
  myProjects.map(project => {
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
      <div key={title} className="margin-top-lg">
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
              {links.map(link => (
                <li key={link.title}>
                  <ExternalLink key={link.url} url={link.url}>
                    {link.title}
                  </ExternalLink>
                </li>
              ))}
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
    );
  });

const getOpenSource = () => (
  <div className="margin-top-lg">
    <h2>Open Source Contributions</h2>
    <ul>
      {openSource.map(item => (
        <li key={item.title} className="margin-top-md">
          <ExternalLink src={item.url}>{item.title}</ExternalLink> -{' '}
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
        {getProjects({ data })}
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
