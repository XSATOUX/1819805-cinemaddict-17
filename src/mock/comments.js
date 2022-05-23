import { getRandomPositiveInteger, getRandom, generateId, getRandomDate} from '../utils.js';

const minComments = 0;
const maxComments = 6;

const commentAuthors = [
  'Betty White',
  'Morgan Freeman',
  'Keanu Reeves',
  'Lucille Ball',
  'Jack Nicholson',
  'Charles Dickens',
  'Herman Melville',
  'Jules Verne',
];
const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const generateCommentId = generateId();

const getComment = () => ({
  id: generateCommentId(),
  author: getRandom(commentAuthors),
  comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  date: getRandomDate(new Date(2010, 1, 1), new Date),
  emotion: getRandom(emotions)
});

const getComments = () => Array.from({ length: getRandomPositiveInteger(minComments, maxComments ),getComment});

export { getComments, getComment };
