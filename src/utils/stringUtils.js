import { capitalCase } from 'change-case';

const specialWords = {
  javascript: 'JavaScript',
};

export const titleCase = (word = '') => {
  if (word.length < 1) {
    return word;
  }

  const lowerCased = word.toLowerCase();
  if (lowerCased in specialWords) {
    return specialWords[lowerCased];
  }

  return capitalCase(word);
};
