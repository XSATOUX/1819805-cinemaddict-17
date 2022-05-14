import {createElement} from '../render.js';
import {generateTitles, generateRating, generateYear,generatePoster, generateDescription, generateGenre} from '../mock/films.js';

const createFilmCardTemplate = (film) => {
  const {titles} = film;
  return(`<article class="film-card">
  <a class="film-card__link">
    <h3 class="film-card__title">${generateTitles()}</h3>
    <p class="film-card__rating">${generateRating()}</p>
    <p class="film-card__info">
      <span class="film-card__year">${generateYear()}</span>
      <span class="film-card__duration">1h 55m</span>
      <span class="film-card__genre">${generateGenre()}</span>
    </p>
    <img src="./images/posters/${generatePoster()}" alt="" class="film-card__poster">
    <p class="film-card__description">${generateDescription()}</p>
    <span class="film-card__comments">5 comments</span>
  </a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`);
};
export default class FilmCardView {
  constructor(film){
    this.film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this.film);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
