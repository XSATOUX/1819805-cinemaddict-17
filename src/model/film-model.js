import { getFilm } from '../mock/films.js';

export default class FilmModel {
  films = Array.from({length: 20}, getFilm);

  getFilms = () => this.films;
}
