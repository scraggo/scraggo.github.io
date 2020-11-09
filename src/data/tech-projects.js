/**
 * @typedef {Object} ProjectData
 * @property {string} ProjectData.imgSrc -> resolves with GraphQL
 */

const myProjects = [
  {
    title: 'Random Music Generators',
    deployUrl: 'https://random-music-generators.herokuapp.com/',
    description:
      'Generate unlimited unique melodies with easily changed parameters including tonality, rhythm, and interval jumps. These melodies can be previewed in-browser and downloaded as MIDI.',
    technology:
      'React, Redux, Express, PostgreSQL, Semantic UI, MIDIwriterJS, ToneJS',
    links: [
      {
        title: 'Random Music Generators - Heroku',
        url: 'https://random-music-generators.herokuapp.com/',
      },
      {
        title: 'View on GitHub',
        url: 'https://github.com/scraggo/Random-Music-Generators',
      },
      {
        title: 'Video Presentation',
        url: 'https://www.youtube.com/watch?v=D46ujdZg4o0',
      },
    ],
    imgSrc: 'https://media.giphy.com/media/lpt5YtiWgLU9tpClnA/giphy.gif',
    // imgSrc: 'rmg-slideshow.gif',
  },
  {
    title: 'Tone Rhythm',
    deployUrl: 'https://github.com/scraggo/tone-rhythm',
    description:
      "As a musician developing music applications, I wanted an API that would allow me to put rhythms along with a melody into Tone.Part. The example on Tone's docs shows how this is expected and it's far from ideal. With the help of this small library, the developer-musician can generate an array of Tone.Transport times given an array of musical rhythms in various formats that Tone.js understands.",
    technology: 'JavaScript (Mocha, Chai, Babel, Webpack, Tone.js)',
    links: [
      {
        title: 'View on GitHub',
        url: 'https://github.com/scraggo/tone-rhythm',
      },
      {
        title: 'View on NPM',
        url: 'https://www.npmjs.com/package/tone-rhythm',
      },
    ],
  },
  {
    title: 'Vocode',
    deployUrl: 'https://vocode.herokuapp.com',
    description:
      "Vocode is a desktop application that allows users to perform a number of useful commands with their voice. The app can populate a user's clipboard with a snippet (a text template) which can be pasted into any text editor. Users can add other user snippets, create new snippets, and manage all this information in one central place. The app also provides a user the ability to display websites in the app with a voice command.",
    technology:
      'Electron JS, WebAudio API, Google Cloud Speech Service, Ant, React, Redux, Express, PostgreSQL',
    links: [
      {
        title: 'Vocode - Heroku',
        url: 'https://vocode.herokuapp.com',
      },
      {
        title: 'View on GitHub',
        url: 'https://github.com/daft-thunk/electricVocode',
      },
      {
        title: 'Video Presentation',
        url: 'https://www.youtube.com/watch?v=-_gCMrigUcw',
      },
    ],
    imgSrc: 'vocode.png',
  },
  {
    title: 'Daft Thunk Direct',
    deployUrl: 'https://daft-thunk-direct.herokuapp.com',
    description:
      'Daft Thunk Direct is a full stack e-commerce platform to sell music equipment. Customers can create carts and add products with and without accounts. Administrators are able to update core business functionality.',
    technology:
      'Google Auth, Passport.js, React, Redux, Express, PostgreSQL, Semantic UI, Sequelize',
    links: [
      {
        title: 'Daft Thunk Direct - Heroku',
        url: 'https://daft-thunk-direct.herokuapp.com',
      },
      {
        title: 'View on GitHub',
        url: 'https://github.com/daft-thunk/daft-thunk',
      },
    ],
    imgSrc: 'daft-thunk-direct.png',
  },
  {
    title: 'SongMind Studios',
    deployUrl: 'http://songmindstudios.com',
    description:
      'Music education business website with blog. Includes CTA buttons, contact forms, and a bold color palette.',
    technology:
      'Wordpress - https://tesseracttheme.com/, mobile-responsive design with Twitter Bootstrap, professionally hosted with domain name, Mailchimp for email list management and Hootsuite for social media.',
    links: [
      {
        title: 'SongMind Studios',
        url: 'http://songmindstudios.com',
      },
    ],
    imgSrc: 'sms-site.png',
  },
  {
    title: 'Bookmarks to Markdown Utilities',
    deployUrl: 'https://github.com/scraggo/bookmarks-markdown-utils',
    description:
      'Collection of command-line tools for Chrome bookmark management. (There is some functionality for OneTab, Evernote, and FireFox.) Designed for personal use and other users who may dislike managing a large bookmark collection inside of Chrome, use Chrome for both Desktop and Mobile bookmarking (and mainly use the "Mobile Bookmarks" folder), want to convert bookmarks into individual markdown files, want a way to visit a site and tag the bookmark with minimal mouse movement, and more.',
    technology: 'Python (pytest, pyperclip, argparse)',
    links: [
      {
        title: 'View on GitHub',
        url: 'https://github.com/scraggo/bookmarks-markdown-utils',
      },
    ],
  },
  {
    title: 'Subnotes - Organize Your Notes',
    deployUrl: 'https://scraggo.github.io/subnotes/',
    description:
      'Web adaptation of a productivity app originally written in Python. Users can input their notes in a certain format and can easily sort, filter, and copy the result to their clipboard.',
    technology: 'Python, Javascript, Bootstrap, clipboard.js, Gulp, Babel',
    links: [
      {
        title: 'Subnotes - Organize Your Notes',
        url: 'https://scraggo.github.io/subnotes/',
      },
      {
        title: 'View on GitHub',
        url: 'https://github.com/scraggo/subnotes/',
      },
    ],
  },
  {
    title: 'ScragMark: Markdown Notes/Bookmarks',
    deployUrl: 'https://github.com/scraggo/ScragMark',
    description:
      'Chrome Extension that allows a user to write notes in markdown format and easily put current tab link in notes. User can display their notes rendered in a separate tab. Notes save persistently.',
    technology:
      'Chrome API, Chrome local storage, Javascript, highlight.js, markdown-it.js',
    links: [
      {
        title: 'View on GitHub',
        url: 'https://github.com/scraggo/ScragMark',
      },
    ],
  },
  {
    title: 'GitHub User Search',
    deployUrl: 'https://scraggo.github.io/Aurelia-Github-Users/',
    description:
      "Web app that allows the user to retrieve data based on a search for a GitHub user name. For example, if you search for `scraggo` (my username) you can easily find my contribution activity (pull requests on others' repositories.)",
    technology: 'AureliaJS, Gulp, GitHub API',
    links: [
      {
        title: 'GitHub User Search',
        url: 'https://scraggo.github.io/Aurelia-Github-Users/',
      },
      {
        title: 'View on GitHub',
        url: 'https://github.com/scraggo/Aurelia-Github-Users',
      },
    ],
  },
];

const openSource = [
  {
    description:
      '♬ A JavaScript library which provides an API for programmatically generating and creating expressive multi-track MIDI files and JSON objects.',
    title: 'grimmdude/MidiWriterJS',
    url: 'https://github.com/grimmdude/MidiWriterJS',
  },
  {
    description: "Back up and parse Google Chrome's Bookmarks.bak file",
    title: 'DavidMetcalfe/Chrome-Bookmarks-Parser',
    url: 'https://github.com/DavidMetcalfe/Chrome-Bookmarks-Parser',
  },
  {
    description: 'Freely available programming books',
    title: 'EbookFoundation/free-programming-books',
    url: 'https://github.com/EbookFoundation/free-programming-books',
  },
];

module.exports = {
  myProjects,
  openSource,
};
