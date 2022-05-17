import {createElement} from '../render.js';

const createFilmCardTemplate = (film) => {
  const {id, comments, filmInfo} = film;
  const {title, poster, totalRating,alternativeTitle, release, runtime, description, genres, userDetails} = filmInfo;
  const {date} = release;

  const watchlistClassName = userDetails.watchlist
    ? 'film-card__controls-item--active'
    : '';

  const alreadyWatchedClassName = userDetails.alreadyWatched
    ? 'film-card__controls-item--active'
    : '';

  const favoriteClassName = userDetails.favorite
    ? 'film-card__controls-item--active'
    : '';

  return(
    `<article class="film-card" data-id='${id}>
  <a class="film-card__link">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${totalRating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${date}</span>
      <span class="film-card__duration">${runtime}</span>
      <span class="film-card__genre">${genres}</span>
    </p>
    <img src="./images/posters/${poster}" alt="${alternativeTitle}" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <span class="film-card__comments">${comments.lenght}</span>
  </a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlistClassName}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${alreadyWatchedClassName}" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite ${favoriteClassName}" type="button">Mark as favorite</button>
  </div>
</article>`
  );
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
