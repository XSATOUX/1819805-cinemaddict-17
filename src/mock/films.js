import dayjs from 'dayjs';
import { getRandomPositiveInteger } from '../utils.js';

const minFilms = 5;
const maxFilms = 20;

const generateTitles = () => {
  const titles = [
    'The dance of life',
    'Popeye meets sinbad',
    'Sentenced for a murder',
    'Sagebrush trail',
    'The great flamarion'

  ];
  const randomIndex = getRandomPositiveInteger(0, titles.length - 1);
  return titles[randomIndex];
};

const generatePoster = () => {
  const filmPosters = [
    'made-for-each-other.png',
    'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg',
    'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg',
    'the-great-flamarion.jpg',
    'the-man-with-the-golden-arm.jpg'
  ];

  const randomIndex = getRandomPositiveInteger(0, filmPosters.length - 1);
  return filmPosters[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',

  ];
  const randomIndex = getRandomPositiveInteger(0, descriptions.length - 1);
  return descriptions[randomIndex];
};

const generateRating = () => getRandomPositiveInteger(0, 10);

const generateYear = () => getRandomPositiveInteger(1930, 1960);

const generateReleaseDate = () => {
  const minReleaseDate = 1950;
  const dateSpace = getRandomPositiveInteger(-minReleaseDate, 0);

  return dayjs().add(dateSpace, 'day').toDate();
};

const generateGenre = () => {
  const genres = [
    'Musical',
    'Horror',
    'Drama',
    'Comedy',
    'Cartoon',
    'Mystery',
  ];
  const randomIndex = getRandomPositiveInteger(0, genres.length - 1);
  return genres[randomIndex];
};


const getFilm = () => ({
  'id': '0',
  'comments': [1,2,3,4,5],
  'filmInfo': {
    'title': 'A Little Pony Without The Carpet',
    'alternativeTitle': 'Laziness Who Sold Themselves',
    'totalRating': 5.3,
    'poster':`images/posters/${generatePoster()}`,
    'ageRating': getRandomPositiveInteger(0,18),
    'director': 'Tom Ford',
    'writers': [
      'Takeshi Kitano',
    ],
    'actors': [
      'Morgan Freeman',
    ],
    'release': {
      'date': generateReleaseDate(),
      'release.Country': 'Finland'
    },
    'runtime': getRandomPositiveInteger(30,220),
    'genres':[],
    'description':'Oscar-winning film, a war drama about two young people, from the creators of timeless classic',
  },
  'userDetails': {
    'watchList': Boolean(getRandomPositiveInteger(0,3)),
    'alreadyWatched': Boolean(getRandomPositiveInteger(0,5)),
    'watchingDate': '2019-04-12T16:12:32.554Z',
    'favorite': Boolean(getRandomPositiveInteger(0,5))
  }
});


const getFilmList = () => Array.from({ length: getRandomPositiveInteger(minFilms, maxFilms)}, getFilm);


export {getFilm, getFilmList,generateTitles, generateRating, generateYear,generatePoster, generateDescription, generateGenre };
