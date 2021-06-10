import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';
import { internalLink } from 'src/utils/mdUtils';

const markdown = `# About Dave Cohen

I’m a programmer, musician, writer, and educator. I'm fascinated with technology and it's intersection with the creative process.

## Software Engineering

Javascript is my goto programming language - it's capable of creating web, mobile, and desktop applications and works across the entire stack. I'm an experienced developer in the React ecosystem with my favorite related technologies being Redux (thunks), Gatsby, Electron, and React Native. On the server side, I enjoy using Node, Express, Sequelize, and SQL (PostgreSQL).

I'm also a fan of SASS, Web Audio APIs (ToneJS), Python, Jekyll, mobile development, testing, and functional programming.

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
