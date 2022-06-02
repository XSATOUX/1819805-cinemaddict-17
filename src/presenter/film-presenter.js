import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmContainerView from '../view/film-container-view.js';
import FilmListView from '../view/film-list-view.js';
import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmPopupView from '../view/film-info-popup-view.js';
import {render} from '../render.js';
import { isEscapeEvent } from '../mock/utils.js';

const MAX_FILMS_AMOUNT_PER_STEP = 5;
document.body.classList.add('hide-overlow');
export default class FilmPresenter {
  #filmContainer = null;
  #filmsModel = null;

  #filmsContainer = new FilmContainerView();
  #filmsComponent = new FilmListView();
  #filmsContainerComponent = new FilmsView();
  #showMoreButtonComponent = new ShowMoreButtonView();

  #films = [];

  init = (filmContainer, filmsModel) => {
    this.#filmContainer = filmContainer;
    this.#filmsModel = filmsModel;
    this.#films = [...this.#filmsModel.films];

    render(new SortView(), this.#filmContainer);
    render(this.#filmsContainerComponent,this.#filmsComponent.element);
    render(this.#filmsContainerComponent,this.#filmContainer);
    render(this.#filmsComponent,this.#filmContainer);
    render(this.#filmsContainer,this.#filmsComponent.element);

    for (let i = 0; i < Math.min(this.#films.length,MAX_FILMS_AMOUNT_PER_STEP);i++) {
      this.#renderFilm(this.#films[i]);
    }
    if (this.#films.length > MAX_FILMS_AMOUNT_PER_STEP) {
      render(this.#showMoreButtonComponent, this.#filmsComponent.element);

      this.#showMoreButtonComponent.element.addEventListener('click',
        this.#handleShowMoreButtonClick);
    }
  };

  #handleShowMoreButtonClick = (evt) => {
    evt.preventDefault();

  };

  #renderFilm = (film) => {
    const filmCardComponent = new FilmCardView(film);
    const filmPopupComponent = new FilmPopupView(film);

    const replaceCardToPopup = () => {
      this.#filmsComponent.element.replaceChild(filmPopupComponent.element, filmCardComponent.element);
    };

    const replacePopupToCard = () => {
      this.#filmsComponent.element.replaceChild(filmCardComponent.element, filmPopupComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (isEscapeEvent(evt)) {
        document.body.classList.removeChild(filmPopupComponent.element);
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const renderPopup = () => {
      document.body.classList.add('hide-overlow');
      document.addEventListener('keydown', onEscKeyDown);
      render(filmPopupComponent);
    };
    const lastPopup = document.body.querySelector('.film-details');

    if(lastPopup){
      document.body.classList.removeChild(lastPopup);
    }
    renderPopup();

    filmCardComponent.element.querySelector('.film-details__inner').addEventListener(() => {
      replaceCardToPopup();
      document.addEventListener('keydown', onEscKeyDown);
    });

    filmPopupComponent.element.querySelector('.film-details__close').addEventListener( (evt) => {
      evt.preventDefault();
      replacePopupToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(filmCardComponent, this.#filmsContainer.element);
  };
}
