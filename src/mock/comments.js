import { getRandomPositiveInteger, getRandom} from './utils.js';

const minComments = 0;
const maxComments = 5;

const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const getComments = () => ({
  'id': getRandomPositiveInteger(minComments, maxComments),
  'author': 'Ilya OReilly',
  'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  'date': '2019-05-11T16:12:32.554Z',
  'emotion': getRandom(emotions)
});

const getCommentsList = () => Array.from({ length: getRandomPositiveInteger(minComments, maxComments ),getComments});

export { getComments, getCommentsList };
