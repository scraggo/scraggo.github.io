/**
 * Schema
 * is defined in google sheet
 */
/* Example:
{
  author: '',
  description: '',
  title: '',
  genre: '',
  readYear: 2021, // year I discovered/read the book
  reviewLink: '', // internal link, if any
  links: {
    buy: '', // amazon, etc
    notes: '', // external notes, summaries
  }
}
*/

export const bookList = [
  {
    favorite: 'y',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    description:
      'Goals are useful for setting a direction, but systems are best for making progress.',
    genre: '',
    readYear: 2021,
    reviewLink: '',
    authorLink: 'https://jamesclear.com/atomic-habits',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title:
      'Heart Breath Mind: Train Your Heart to Conquer Stress and Achieve Success',
    author: 'Dr. Leah Lagos',
    description:
      '10-week program to improve overall body functioning and reduce stress. This includes increasing heart rate variability (HRV), finding your resonant breathing frequency, and using exercises to reliably work through challenging emotions.',
    genre: '',
    readYear: 2021,
    reviewLink: '',
    authorLink: 'https://drleahlagos.com/heart-breath-mind/',
    buyLink: '',
    notesLink: 'https://maxfrenzel.com/books/heart-breath-mind',
    partiallyRead: 'y',
  },
  {
    favorite: 'y',
    title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
    author: 'Susan Cain',
    description:
      "Quiet is an antidote for society's fixation with sociability and extroversion. The book takes a tour through the wide-ranging research on introversion, demonstrating its underestimated upside – and how we need to adapt to take advantage of it.",
    genre: '',
    readYear: 2021,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title:
      'Think Like a Rocket Scientist: Simple Strategies You Can Use to Make Giant Leaps in Work and Life',
    author: 'Ozan Varol',
    description:
      'Through engaging stories to illustrate key concepts, Varol shares how to Launch, Accelerate, and Achieve. In Launch, we explore the topics of embracing uncertainty, reasoning from first principles, and thinking creatively. In Accelerate, we consider how we can improve our approach to problem solving. In Achieve, we learn how to respond to the flip-side outcomes of failure and success.',
    genre: '',
    readYear: 2021,
    reviewLink: '',
    authorLink: 'https://ozanvarol.com/rocket',
    buyLink: '',
    notesLink:
      'https://mentalpivot.com/book-notes-think-like-a-rocket-scientist-by-ozan-varol/',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'Being Peace',
    author: 'Thich Nhat Hanh',
    description:
      'This book shows how our state of mind and body can make the world a peaceful place. We learn to transform the very situations that pressure and antagonize us into opportunities for practicing mindfulness.',
    genre: '',
    readYear: 2020,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'Breath: The New Science of a Lost Art',
    author: 'James Nestor',
    description:
      'This book is filled with great tips, exercises, and anecdotes. Breathing exclusively through my nose has been a game-changer for sleep, singing, and more.',
    genre: '',
    readYear: 2020,
    reviewLink: '',
    authorLink: 'https://www.mrjamesnestor.com/breath',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'Essays',
    author: 'Dean Schlecht',
    description:
      'In addition to the essays, this psychotherapist provides meditation audio files that put your "active imagination" (a concept accredited to Carl Jung) to use.',
    genre: '',
    readYear: 2020,
    reviewLink: '',
    authorLink: 'https://www.deanschlecht.com/',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title:
      "It's Not Always Depression: Working the Change Triangle to Listen to the Body, Discover Core Emotions, and Connect to Your Authentic Self",
    author: 'Hilary Jacobs Hendel',
    description:
      'The author teaches the "Change Triangle" methodology for processing emotions, calming, etc.',
    genre: '',
    readYear: 2020,
    reviewLink: '',
    authorLink: 'https://www.hilaryjacobshendel.com/itsnotalwaysdepressionbook',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: "Man's Search for Meaning",
    author: 'Victor Frankl',
    description:
      'In Man’s Search for Meaning, Viktor Frankl tells his story of surviving a concentration camp and how this experience led to his theory on the importance of meaning in one’s life (Logotherapy). You can find meaning in work (by doing something significant), in love (by caring for another person), and in courage during difficult times.',
    genre: '',
    readYear: 2020,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: 'https://dansilvestre.com/mans-search-for-meaning-summary/',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: "The Surrender Experiment: My Journey into Life's Perfection",
    author: 'Michael Singer',
    description:
      'A much needed perspective shift. Why expecting reality to conform to your desires is a guaranteed path to disappointment. Instead, saying yes to opportunities presented to you and learning to be neutral (or even happy) about events you normally would be displeased with. Author is very much into meditation and being in touch with your higher mind / deeper self.',
    genre: '',
    readYear: 2020,
    reviewLink: '',
    authorLink:
      'https://untetheredsoul.com/the-surrender-experiment-premise-excerpt',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'The Big Leap',
    author: 'Gay Hendricks',
    description:
      'Find your Zone of Genius. Conquer your self-imposed Upper Limits.',
    genre: '',
    readYear: 2019,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Big-Leap-Conquer-Hidden-Level/dp/0061735361',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title:
      'Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers',
    author: 'Tim Ferriss',
    description:
      'is a massive compendium of everything Tim Ferriss has learned about health, wealth and wisdom from interviewing over 200 world-class performers on his podcast, The Tim Ferriss show. [All about Tim Ferriss](https://tim.blog/)',
    genre: '',
    readYear: 2019,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Tools-Titans-Billionaires-World-Class-Performers/dp/1328683788',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: '7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    description:
      'Habit 1: Be Proactive. Habit 2: Begin With the End in Mind. Habit 3: Put First Things First. Habit 4: Think Win-Win. Habit 5: Seek First to Understand, Then to Be Understood. Habit 6: Synergize. Habit 7: Sharpen the Saw.',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: 'https://www.franklincovey.com/the-7-habits/',
    buyLink:
      'https://www.amazon.com/Habits-Highly-Effective-People/dp/0671708635',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'Eastern Body, Western Mind',
    author: 'Anodea Judith',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Eastern-Body-Western-Mind-Psychology/dp/1587612259',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'Effortless Mastery',
    author: 'Kenny Werner',
    description: '',
    genre: 'music',
    readYear: 2015,
    reviewLink: '',
    authorLink: 'https://kennywerner.com/effortless-mastery',
    buyLink:
      'https://www.amazon.com/Effortless-Mastery-Liberating-Master-Musician/dp/156224003X',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title:
      'Looking at Philosophy: The Unbearable Heaviness of Philosophy Made Lighter',
    author: 'Donald D. Palmer',
    description:
      'Through the use of humor and nearly 400 drawings, charts, and diagrams, serious philosophical topics come alive for the reader without compromising the importance of the subject matter.',
    genre: 'philosophy',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Looking-At-Philosophy-Unbearable-Heaviness/dp/0078119162',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title:
      'Mindfulness: An Eight-Week Plan for Finding Peace in a Frantic World',
    author: 'Williams and Penman',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Mindfulness-Eight-Week-Finding-Peace-Frantic/dp/1427217165',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'Solitude: A Return to the Self',
    author: 'Anthony Storr',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Solitude-Return-Self-Anthony-Storr/dp/0743280741',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title:
      'The Back of the Napkin: Solving Problems and Selling Ideas with Pictures',
    author: 'Dan Roam',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.goodreads.com/book/show/2420301.The_Back_of_the_Napkin',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title:
      'The Breakout Principle: How to Activate the Natural Trigger That Maximizes Creativity, Athletic Performance, Productivity and Personal Well-Being',
    author: 'Herbert Benson and William Proctor',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Breakout-Principle-Creativity-Performance-Productivity/dp/0743223985',
    notesLink: 'https://www.cbass.com/Breakout.htm',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'The Way of Zen',
    author: 'Alan Watts',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: 'https://www.amazon.com/Way-Zen-Alan-W-Watts/dp/0375705104',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'Zen Guitar',
    author: 'Philip Toshio Sudo',
    description:
      'Lovely and very quotable. May transform how you approach guitar and music.',
    genre: 'music',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Zen-Guitar-Philip-Toshio-Sudo/dp/068483877X',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'Antifragile: Things That Gain from Disorder',
    author: 'Nassim Taleb',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'Outliers: The Story of Success',
    author: 'Malcolm Gladwell',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930/ref=sr_1_1?crid=1HGDOSUBC315Y&dchild=1&keywords=outliers+malcolm+gladwell&qid=1623521937&s=books&sprefix=Outliers%2Cstripbooks%2C197&sr=1-1',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'The Advancing Guitarist',
    author: 'Mick Goodrick',
    description: '',
    genre: 'music',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title:
      'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'The Music Lesson',
    author: 'Victor Wooten',
    description: '',
    genre: 'music',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'The Tipping Point',
    author: 'Malcolm Gladwell',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: 'y',
    title: 'The War of Art',
    author: 'Steven Pressfield',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title:
      "Detox Your Thoughts: Quit Negative Self-Talk for Good and Discover the Life You've Always Wanted",
    author: 'Andrea Bonior',
    description: '',
    genre: '',
    readYear: 2021,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Life Loves You: 7 Spiritual Practices to Heal Your Life',
    author: 'Robert Holden and Louise Hay',
    description: '',
    genre: '',
    readYear: 2021,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title:
      'The Obstacle Is the Way: The Timeless Art of Turning Trials into Triumph',
    author: 'Ryan Holiday',
    description: '',
    genre: '',
    readYear: 2021,
    reviewLink: '',
    authorLink: '',
    buyLink: 'https://www.amazon.com/s?k=1591846358&tag=sivers-20',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: "Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    description: '',
    genre: 'fiction',
    readYear: 2021,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: 'y',
  },
  {
    favorite: '',
    title:
      'Adult Children of Emotionally Immature Parents: How to Heal from Distant, Rejecting, or Self-Involved Parents',
    author: 'Lindsay C. Gibson',
    description:
      '[id 31700](https://www.newharbinger.com/adult-children-emotionally-immature-parents/accessories)',
    genre: '',
    readYear: 2020,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Focusing',
    author: 'Eugene Gendlin',
    description:
      'In the same vein as It’s Not Always Depression. I really like the terminology the author uses.',
    genre: '',
    readYear: 2020,
    reviewLink: '',
    authorLink: 'https://focusing.org/sixsteps',
    buyLink: 'https://www.amazon.com/Focusing-Eugene-T-Gendlin/dp/0553278339',
    notesLink: '',
    partiallyRead: 'y',
  },
  {
    favorite: '',
    title: 'Can’t Hurt Me',
    author: 'David Goggins',
    description: '',
    genre: '',
    readYear: 2019,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Daring Greatly',
    author: 'Brene Brown',
    description: '',
    genre: '',
    readYear: 2018,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'The Art of Learning: An Inner Journey to Optimal Performance',
    author: 'Josh Waitzkin',
    description: '',
    genre: '',
    readYear: 2017,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'The Desire Map',
    author: 'Danielle LaPorte',
    description: '',
    genre: '',
    readYear: 2017,
    reviewLink: '',
    authorLink: 'https://www.thedesiremap.com/',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title:
      "The Story of Philosophy: The Lives and Opinions of the World's Greatest Philosophers",
    author: 'Will Durant',
    description: '',
    genre: 'philosophy',
    readYear: 2017,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title:
      'You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life',
    author: 'Jen Sincero',
    description: '',
    genre: '',
    readYear: 2017,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: "Drop Dead Healthy: One Man's Humble Quest for Bodily Perfection",
    author: 'A. J. Jacobs',
    description: '',
    genre: '',
    readYear: 2016,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'You Can Heal Your Life',
    author: 'Louise Hay',
    description: '',
    genre: '',
    readYear: 2016,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'All You Need to Know About the Music Business',
    author: 'Donald S. Passman',
    description: '',
    genre: 'music',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'As a Man Thinketh',
    author: 'James Allen',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Conversations with God',
    author: 'Neale Donald Walsch',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: 'y',
  },
  {
    favorite: '',
    title: 'Experiences in Visual Thinking',
    author: 'Robert McKim',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Experiences-Visual-Thinking-Robert-McKim/dp/B000IOFWHE',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Getting Things Done',
    author: 'David Allen',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Introducing Jung',
    author: 'Maggie Hyde, Michael McGuinness, Richard Appignanesi',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.betterworldbooks.com/product/detail/Introducing-Jung-9781840460629',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Music and the Mind',
    author: 'Anthony Storr',
    description: '',
    genre: 'music',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Narcissus and Goldmund',
    author: 'Hermann Hesse',
    description: '',
    genre: 'fiction',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Neuro-linguistic Programming for Dummies',
    author: 'Romilla Ready and Kate Burton',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: 'y',
  },
  {
    favorite: '',
    title:
      'Rational Mysticism: Spirituality Meets Science in the Search for Enlightenment',
    author: 'John Horgan',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Siddhartha',
    author: 'Hermann Hesse',
    description: '',
    genre: 'fiction',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Siddhartha-Novel-Hermann-Hesse/dp/0553208845',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title:
      'The 4 Hour Body: An Uncommon Guide to Rapid Fat Loss, Incredible Sex and Becoming Superhuman',
    author: 'Tim Ferriss',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: 'y',
  },
  {
    favorite: '',
    title:
      'The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich',
    author: 'Tim Ferriss',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'The Meaning of Dreams',
    author: 'Calvin Hall',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'The Power of Now: A Guide to Spiritual Enlightenment',
    author: 'Eckhart Tolle',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'The Prophet',
    author: 'Kahlil Gibran',
    description: '',
    genre: 'fiction',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: 'y',
  },
  {
    favorite: '',
    title:
      'The Tao of Physics: An Exploration of the Parallels between Modern Physics and Eastern Mysticism',
    author: 'Fritjof Capra',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: "Think Better: An Innovator's Guide to Productive Thinking",
    author: 'Tim Hurson',
    description:
      'Favorite chapter is on Divergent Thinking [Tim Hurson talks about Productive Thinking | YouTube](https://www.youtube.com/watch?v=KYgEfriJsR8)',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'This is Your Brain on Music',
    author: 'Daniel J. Levitin',
    description: '',
    genre: 'music',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Thus Spoke Zarathustra',
    author: 'Friederich Nietzsche',
    description: '',
    genre: 'philosophy',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Why Beauty Is Truth: The History of Symmetry',
    author: 'Ian Stewart',
    description: '',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink: '',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Zen Teaching of Emptiness',
    author: 'Gosung Shin',
    description:
      '[Cup of Tea Koan](http://www.ashidakim.com/zenkoans/1acupoftea.html) [What is Great Doubt in Zen? | Quora](https://www.quora.com/What-is-the-Great-Doubt-in-Zen)',
    genre: '',
    readYear: 2015,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com.br/Teaching-Emptiness-English-Master-Gosung-ebook/dp/B0762V5BM4',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title:
      "The Toyota Way: 14 Management Principles from the World's Greatest Manufacturer",
    author: 'Jeffrey Liker',
    description:
      'Lean" strategy as demonstrated by the practices and success of the Toyota car company.',
    genre: '',
    readYear: 2016,
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Toyota-Way-Management-Principles-Manufacturer/dp/0071392319',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title:
      'Work the System: The Simple Mechanics of Making More and Working Less',
    author: 'Sam Carpenter',
    description:
      'Your job is not to be a fire-killer. Your job is to be a fire-prevention specialist. Stop expending energy in the constant repair of the bad results that have been produced by your unseen and therefore unmanaged systems. Instead, spend your days observing and then managing the systems that are creating the results.',
    genre: '',
    readYear: '',
    reviewLink: '',
    authorLink: 'https://www.workthesystem.com/',
    buyLink:
      'https://www.amazon.com/Work-System-Mechanics-Working-Revised/dp/160832253X',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Tunesmith: Inside the Art of Songwriting',
    author: 'Jimmy Webb',
    description: '',
    genre: 'music',
    readYear: '',
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Tunesmith-Inside-Songwriting-Jimmy-Webb/dp/0786884886',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title:
      'The Shaping Forces in Music: An Inquiry into the Nature of Harmony, Melody, Counterpoint and Form',
    author: 'Ernst Toch',
    description: '',
    genre: 'music',
    readYear: '',
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Shaping-Forces-Music-Counterpoint-Orchestral/dp/0486233464',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title:
      "A Mathematician's Lament: How School Cheats Us Out of Our Most Fascinating and Imaginative Art Form",
    author: 'Paul Lockhart',
    description:
      'This strongly worded opinion piece is organized into two parts. The first part, "Lamentation", criticizes the way mathematics is typically taught in American schools and argues for an aesthetic, intuitive, and problem-oriented approach to teaching. The second part, "Exultation", gives specific examples of how to teach mathematics as an art. [PDF](https://duckduckgo.com/?q=A+Mathematician%27s+Lament+by+Paul+Lockhart)',
    genre: '',
    readYear: '',
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Mathematicians-Lament-School-Fascinating-Imaginative/dp/1934137170',
    notesLink: '',
    partiallyRead: '',
  },
  {
    favorite: '',
    title: 'Musicophilia: Tales of Music and the Brain',
    author: 'Oliver Sacks',
    description: '',
    genre: '',
    readYear: '',
    reviewLink: '',
    authorLink: '',
    buyLink:
      'https://www.amazon.com/Musicophilia-Tales-Music-Revised-Expanded/dp/1400033535',
    notesLink: '',
    partiallyRead: '',
  },
];
