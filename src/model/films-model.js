import { getFilm } from '../mock/films.js';

export default class FilmsModel {
  #films = Array.from({length: 15}, getFilm);

  get films(){
    return this.#films;
  }
}
