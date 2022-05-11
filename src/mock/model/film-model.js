import { getFilmList } from '../films.js';

export default class FilmModel {
  films = Array.from({length: 20}, getFilmList);

  getFilms = () => this.films;
}
