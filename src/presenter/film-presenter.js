import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmContainerView from '../view/film-container-view.js';
import FilmListView from '../view/film-list-view.js';
import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import {render} from '../render.js';

export default class FilmPresenter {
  #filmContainer = null;
  #filmsModel = null;

  #filmsContainer = new FilmContainerView();
  #filmsComponent = new FilmListView();
  #filmsContainerComponent = new FilmsView();

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

    render(new ShowMoreButtonView(), this.#filmsComponent.element);
  };

  #renderFilm = (film) => {
    const filmListComponent = new FilmCardView(film);

    render(filmListComponent, this.#filmsContainer.element);
  };
}
