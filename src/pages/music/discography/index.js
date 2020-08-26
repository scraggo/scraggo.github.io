import React from 'react';

import ExternalLink from 'src/components/ExternalLink';
import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

import { solo, collabs } from 'src/data/discography';

import albumImg from './identity-album-cover.png';
import albumImgBack from './identity-back-cover.png';
import './style.scss';

const featuredAlbumLinks = solo.albums[0].urls;

const getMusicServiceIcon = serviceName => {
  const filename = serviceName.split(' ')[0].toLowerCase();
  return <img src={`/music-service-icons/${filename}.png`} alt={serviceName} />;
};

const getLink = (linkData, className) => {
  const { host, url, useIcon } = linkData;
  return (
    <ExternalLink className={className} key={url} url={url}>
      {useIcon && getMusicServiceIcon(host)} {host}
    </ExternalLink>
  );
};

const getArtistDiscog = artistData => {
  const { artist, albums, urls } = artistData;
  return (
    <div>
      <h4>
        {`${artist}'s releases on`}
        {urls.map(linkData => getLink(linkData, 'album-link'))}
      </h4>
      <ul>
        {albums.map(album => {
          const { title, urls } = album;
          return (
            <li>
              {title}{' '}
              {urls.map(linkData => getLink(linkData, 'album-link-small'))}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default () => (
  <Layout className="text-wrapper music-discography-page">
    <SEO title="Music Discography" />
    <div className="feature">
      <img className="featured-image" src={albumImg} alt="scraggo, Identity" />
      <img
        className="featured-image-back"
        src={albumImgBack}
        alt="scraggo, Identity, back cover"
      />
      <div className="featured-links flex flex-wrap flex-jc-center">
        {featuredAlbumLinks.map(linkData =>
          getLink(
            { ...linkData, useIcon: true },
            'album-link-button flex flex-ai-center'
          )
        )}
      </div>
    </div>
    <h1>Discography</h1>
    {getArtistDiscog(solo)}
    <h2>Collaborations</h2>
    {collabs.map(getArtistDiscog)}
  </Layout>
);
