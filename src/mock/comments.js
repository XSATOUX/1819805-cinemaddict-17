import { getRandomPositiveInteger, getRandom, generateId} from '../utils.js';

const minComments = 0;
const maxComments = 5;

const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const generateCommentId = generateId();

const getComment = () => ({
  'id': generateCommentId(),
  'author': 'Ilya OReilly',
  'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  'date': '2019-05-11T16:12:32.554Z',
  'emotion': getRandom(emotions)
});

const getComments = () => Array.from({ length: getRandomPositiveInteger(minComments, maxComments ),getComment});

export { getComments, getComment };
