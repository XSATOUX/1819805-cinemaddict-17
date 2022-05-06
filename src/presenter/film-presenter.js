import FilmCardView from '../view/film-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmContainerView from '../view/film-container-view.js';
import FilmListView from '../view/film-list-view.js';
import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import {render} from '../render.js';
export default class FilmPresenter {
  filmsContainer = new FilmContainerView();
  filmsComponent = new FilmListView();
  filmsContainerComponent = new FilmsView();

  init = (filmContainer) => {
    this.filmContainer = filmContainer;

    render(new SortView(), this.filmContainer);
    render(this.filmsContainerComponent,this.filmsComponent.getElement());
    render(this.filmsContainerComponent,this.filmContainer);
    render(this.filmsComponent, this.filmContainer);
    render(this.filmsContainer, this.filmsComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsContainer.getElement());
    }

    render(new ShowMoreButtonView(), this.filmsComponent.getElement());
  };
}
