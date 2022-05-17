import { getRandom, getRandomPositiveInteger , getRandomDate} from './random';

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
const generateCountry = () => {
  const countries = [
    'United States',
    'Austria',
    'Germany',
    'Denmark',
    'Spain',
  ];
  const randomIndex = getRandomPositiveInteger(0, countries.length - 1);
  return countries[randomIndex];
};


const generateRating = () => getRandomPositiveInteger(0, 10);

const generateYear = () => getRandomPositiveInteger(1930, 1975);


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

const generateWriter = () => {
  const writers = [
    'Charles Dickens',
    'Herman Melville',
    'Jules Verne',
    'Emily Dickinson',
    'Gabriel Garcia Marques',
  ];
  const randomIndex = getRandomPositiveInteger(0, writers.length - 1);
  return writers[randomIndex];
};

const generateActor = () => {
  const actors = [
    'Betty White',
    'Morgan Freeman',
    'Keanu Reeves',
    'Lucille Ball',
    'Jack Nicholson',
  ];
  const randomIndex = getRandomPositiveInteger(0, actors.length - 1);
  return actors[randomIndex];
};

export const getFilm = () => ({
  id: 0,
  comments: [1,2,3,4,5],
  filmInfo: {
    title:getRandom(generateTitles),
    alternativeTitle: 'Laziness Who Sold Themselves',
    totalRating: getRandomPositiveInteger(3,10),
    poster:`images/posters/${generatePoster()}`,
    ageRating: getRandomPositiveInteger(0,18),
    director: 'Tom Ford',
    writers: getRandom(generateWriter),
    actors:getRandom(generateActor),
    release: {
      date: getRandomDate(new Date(1940, 1, 1), new Date),
      country:getRandom(generateCountry),
    },
    runtime: getRandomPositiveInteger(30,220),
    genres: Array.from({ length: 3 }, generateGenre),
    description: getRandom(generateDescription),
  },
  userDetails: {
    watchList: Boolean(getRandomPositiveInteger(0,3)),
    alreadyWatched: Boolean(getRandomPositiveInteger(0,5)),
    watchingDate: getRandomDate(new Date(2005, 1, 1), new Date),
    favorite: Boolean(getRandomPositiveInteger(0,5))
  },
});

const getFilmList = () => Array.from({ length: getRandom(minFilms, maxFilms)}, getFilm);

export {getFilmList, generateRating , generateYear};
