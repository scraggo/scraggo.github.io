import React from 'react';

import ReactMarkdown from 'react-markdown';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';
import ExternalLink from 'src/components/ExternalLink';
import { Dropdown, Icon } from 'src/components/SUI';

import { bookList } from 'src/data/book-list';

import { externalLink, pToAnyWithClassName } from 'src/utils/mdUtils';

import './reading-list.scss';

const markdown = `
My favorite books and essays (most recently read listed first)

> Check out these reading lists for more ideas on what to read next: [Derek Sivers](https://sive.rs/book/), [Ryan Holiday](https://ryanholiday.net/reading-list/), [James Clear](https://jamesclear.com/best-books)
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
    <i className="book-data">
      {' '}
      {
        // genre ? <span>({genre})</span> : null
      }
      {reviewLink.length ? (
        <span>
          <ExternalLink url={reviewLink}>My notes</ExternalLink>{' '}
        </span>
      ) : null}
      {authorLink.length ? (
        <span>
          <ExternalLink url={authorLink}>Author link</ExternalLink>{' '}
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
  const genresSet = new Set();
  const genres = [
    // { key: 1, text: 'One', value: 1 },
  ];

  const [filterBy, setFilterBy] = React.useState('');

  const populateGenres = genre => {
    if (genre.length > 0 && !genresSet.has(genre)) {
      genresSet.add(genre);
      genres.push({
        key: genre,
        text: genre,
        value: genre,
      });
    }
  };

  return (
    <Layout>
      <SEO title="Reading List" />
      <div className="text-wrapper">
        <ReactMarkdown
          children={markdown}
          components={{
            a: externalLink,
          }}
        />
        <div>
          <i>Filter by: </i>
          <Dropdown
            className="reading-list-filter"
            clearable
            // fluid
            // multiple
            onChange={(e, { value }) => setFilterBy(value)}
            options={genres}
            placeholder="All"
            selection
            value={filterBy}
          />
        </div>
        <div className="reading-list">
          {bookList
            // favorites are first
            .sort((a, b) => b.favorite.length - a.favorite.length)
            .map(book => {
              const {
                author,
                buyLink,
                description,
                favorite,
                genre,
                title,
              } = book;

              populateGenres(genre);

              if (filterBy.length > 0 && genre !== filterBy) {
                return null;
              }

              return (
                <div className="book" key={title}>
                  <div className="book-title">
                    {getTitle(title, buyLink)} - by {author}
                    {favorite ? (
                      <span className="book-favorite">
                        <Icon name="star outline" size="small" />
                      </span>
                    ) : null}
                  </div>
                  <div className="book-info">
                    {description.length > 0 ? (
                      <ReactMarkdown
                        children={description}
                        components={{
                          a: externalLink,
                          p: pToAnyWithClassName({
                            className: 'book-description',
                            Comp: 'span',
                          }),
                        }}
                      />
                    ) : null}
                    {getDataTable(book)}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};
