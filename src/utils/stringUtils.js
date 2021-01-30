import capitalize from 'lodash/capitalize';

const specialWords = {
  ava: 'AVA',
  javascript: 'JavaScript',
  oop: 'OOP',
  typescript: 'TypeScript',
};

export const capitalizeWords = (word = '') => {
  if (word.length < 1) {
    return word;
  }

  const lowerCased = word.toLowerCase();
  if (lowerCased in specialWords) {
    return specialWords[lowerCased];
  }

  return word
    .split(' ')
    .map(w => capitalize(w))
    .join(' ');
};
