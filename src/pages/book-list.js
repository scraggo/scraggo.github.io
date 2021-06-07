import React from 'react';

import ReactMarkdown from 'react-markdown';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';
import ExternalLink from 'src/components/ExternalLink';

import { bookList } from 'src/data/book-list';

const markdown = `
This is an incomplete list of books and essays that I've read that have made an impression on me. Most are non-fiction.

> Looking for more book ideas? Check out these reading lists: [Derek Sivers](https://sive.rs/book/), [Ryan Holiday](https://ryanholiday.net/reading-list/), [James Clear](https://jamesclear.com/best-books)
`;

const getTitle = (title, url) => {
  return url ? <ExternalLink url={url}>{title}</ExternalLink> : title;
};

const getDataTable = ({
  // genre,
  // readYear,
  reviewLink,
  authorLink,
  notesLink,
  // partiallyRead
}) => {
  return (
    <i style={{ display: 'block' }}>
      {reviewLink.length ? (
        <span>
          <ExternalLink url={reviewLink}>My notes</ExternalLink>{' '}
        </span>
      ) : null}
      {authorLink.length ? (
        <span>
          <ExternalLink url={authorLink}>Learn more</ExternalLink>{' '}
        </span>
      ) : null}
      {notesLink.length ? (
        <span>
          <ExternalLink url={notesLink}>Notes</ExternalLink>{' '}
        </span>
      ) : null}
    </i>
  );
};

export default () => {
  return (
    <Layout>
      <SEO title="Reading List" />
      <div className="text-wrapper">
        <ReactMarkdown source={markdown} />
        {bookList
          // favorites are first
          .sort((a, b) => b.favorite.length - a.favorite.length)
          .map(book => {
            const { author, buyLink, description, title } = book;
            return (
              <p>
                <b>
                  {getTitle(title, buyLink)} by {author}
                </b>
                {'  '}
                {description}
                {getDataTable(book)}
              </p>
            );
          })}
      </div>
    </Layout>
  );
};
