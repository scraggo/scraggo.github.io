import React from 'react';

import ExternalLink from 'src/components/ExternalLink';
import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

import { solo, collabs } from 'src/data/discography';

const getLink = linkData => {
  const { host, url } = linkData;
  return (
    <ExternalLink key={url} url={url} style={{ marginLeft: 4 }}>
      {host}
    </ExternalLink>
  );
};

const getArtistDiscog = artistData => {
  const { artist, albums, urls } = artistData;
  return (
    <div>
      <h4>
        {`${artist}'s releases on`}
        {urls.map(getLink)}
      </h4>
      <ul>
        {albums.map(album => {
          const { title, urls } = album;
          return (
            <li>
              {title} -{urls.map(getLink)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default () => (
  <Layout className="text-wrapper">
    <SEO title="Music Discography" />
    <h1>Discography</h1>
    {getArtistDiscog(solo)}
    <h2>Collaborations</h2>
    {collabs.map(getArtistDiscog)}
  </Layout>
);
