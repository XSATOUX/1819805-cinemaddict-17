import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmContainerView from '../view/film-container-view.js';
import FilmListView from '../view/film-list-view.js';
import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmPopupView from '../view/film-info-popup-view.js';
import {render} from '../render.js';

const MAX_FILMS_AMOUNT_PER_STEP = 5;
const fileBodyElement = document.body;
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

    for (let i = 0; i < this.#films.length; i++) {
      this.#renderFilm(this.#films[1]);
    }
    if (this.#films.length > MAX_FILMS_AMOUNT_PER_STEP) {
      render(this.#showMoreButtonComponent, this.#filmsComponent.element);

      this.#showMoreButtonComponent.element.addEventListener('click',
        this.#handleShowMoreButtonClick);
    }
  };

  #handleShowMoreButtonClick = (evt) => {
    evt.preventDefault();
    // alert('Works!');
  };

  #renderFilm = (film) => {
    const filmListComponent = new FilmCardView(film);
    const filmPopupComponent = new FilmPopupView(film);

    const replaceCardToForm = () => {
      this.#filmsComponent.element.replaceChild(filmPopupComponent.element, filmListComponent.element);
    };

    const replaceFormToCard = () => {
      this.#filmsComponent.element.replaceChild(filmListComponent.element, filmPopupComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        fileBodyElement.removeChild(filmPopupComponent.element);
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const renderPopup = () => {
      fileBodyElement.classList.add('hide-overlow');
      document.addEventListener('keydown', onEscKeyDown);
      render(filmPopupComponent, fileBodyElement);
    };
    const lastPopup = fileBodyElement.querySelector('.film-details');

    if(lastPopup){
      fileBodyElement.removeChilde(lastPopup);
    }
    renderPopup();

    filmListComponent.element.querySelector('.film-details__inner').addEventListener('click', () => {
      replaceCardToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    filmPopupComponent.element.querySelector('.film-details__close').addEventListener( (evt) => {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(filmListComponent, this.#filmsContainer.element);
  };
}
