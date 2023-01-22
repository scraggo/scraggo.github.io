import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';
import { internalLink } from 'src/utils/mdUtils';

const markdown = `# About Dave Cohen

I’m a programmer, musician, writer, and educator. I'm fascinated with technology and it's intersection with the creative process.

## Software Engineering

I'm a full-stack developer who specializes in JavaScript, TypeScript, Node, and React. I enjoy building applications with a focus on great user experience - be it web, mobile, command-line, or desktop applications. My favorite technologies include NextJS, Gatsby, Electron, Web Audio APIs (ToneJS), SCSS, Express, Sequelize, and related testing frameworks. I'm also capable in utilizing deployment technologies (Github Actions, Gitlab Pipelines), AWS (Lambda, S3, ECS, etc), Python, and SQL (PostgreSQL).

Please [contact me](/contact) for consulting purposes, speaking engagements (tech talks), mentoring, or teaching workshops.

- [Portfolio](/tech/projects)
- [Tech Blog](/tech)

## Music

I have over a decade of experience teaching music composition, music theory, improvisation, and recording engineering. I play guitar, bass, drums, piano, and sing.

I studied recording engineering, composition, and jazz guitar at the
Peabody Conservatory and graduated in 2007.

- [Discography - Hear my music](/music/discography)
- [Teaching Resources](/music/teaching-resources)
- [Music Blog](/music)

## Other interests

I'm interested in psychology, philosophy, productivity, comedy, and more. [Find my writings here](/other). [Find my reading list here](/reading-list).
`;

export default () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="text-wrapper">
        <ReactMarkdown
          children={markdown}
          components={{
            a: internalLink,
          }}
        />
      </div>
    </Layout>
  );
};
