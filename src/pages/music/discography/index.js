import React from 'react';

import ExternalLink from 'src/components/ExternalLink';
import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

import analyticsEvents from 'src/data/analytics-events';
import { solo, collabs } from 'src/data/discography';

import albumImg from './identity-album-cover.png';
import albumImgBack from './identity-back-cover.png';
import './style.scss';

const featuredAlbumLinks = solo.albums.find(album => album.title === 'Identity')
  .urls;

const getServiceShortName = serviceName =>
  serviceName.split(' ')[0].toLowerCase();

const getWoopra = () => window.woopra;

const trackLinkClick = (eventName, data) => () => {
  const analytics = getWoopra();
  if (!analytics) return;
  analytics.track(eventName, data);
};

const getMusicServiceIcon = serviceName => {
  return (
    <img
      className="icon"
      src={`/music-service-icons/${getServiceShortName(serviceName)}.png`}
      alt={serviceName}
    />
  );
};

const getLink = (linkData, className) => {
  const { album, artist, host, url, useIcon, useText = true } = linkData;
  return (
    <ExternalLink
      className={className}
      key={url}
      url={url}
      onClick={trackLinkClick(analyticsEvents.external_music_link, {
        album,
        artist,
        url,
      })}
    >
      {useIcon && getMusicServiceIcon(host)}
      {useText && host}
    </ExternalLink>
  );
};

const getArtistDiscog = artistData => {
  const { artist, albums, urls } = artistData;
  return (
    <div className="artist-releases" key={artist}>
      <h4>
        {`${artist}'s releases on`}
        {urls.map(linkData =>
          getLink(
            { ...linkData, artist, useIcon: true, useText: false },
            'album-link'
          )
        )}
      </h4>
      <ul>
        {albums.map(album => {
          const { title, urls } = album;
          return (
            <li className="album-li" key={`${artist}_${title}`}>
              {title}{' '}
              {urls.map(linkData =>
                getLink(
                  {
                    ...linkData,
                    artist,
                    album: title,
                    useIcon: true,
                    useText: false,
                  },
                  'album-link-small'
                )
              )}
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
      <h2>IDENTITY (2020)</h2>
      <img className="featured-image" src={albumImg} alt="scraggo, Identity" />
      <img
        className="featured-image-back"
        src={albumImgBack}
        alt="scraggo, Identity, back cover"
      />
      <div className="featured-links flex flex-wrap flex-jc-center">
        {featuredAlbumLinks.map(linkData =>
          getLink(
            {
              ...linkData,
              artist: 'scraggo',
              album: 'Identity',
              useIcon: true,
            },
            'album-link-button flex flex-ai-center'
          )
        )}
      </div>
    </div>
    <h2>Discography</h2>
    {getArtistDiscog(solo)}
    <h2>Collaborations</h2>
    {collabs.map(getArtistDiscog)}
  </Layout>
);
