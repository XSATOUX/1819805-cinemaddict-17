import SortView from '../view/sort-view.js';
import FilmCardView from '../view/film-card-view.js';
import UserTitleView from '../view/user-title-view.js';
import ShowMoreButtonView from '../view/button-show-more-view.js';
import {render} from '../render.js';

export default class filmPresenter {
  filmComponent = new FilmCardView();
  filmCardComponent = new FilmCardView();

  init = (filmContainer) => {
    this.filmContainer = filmContainer;

    render(this.filmComponent, this.filmdContainer);
    render(new SortView(), this.filmComponent.getElement());
    render(this.Component, this.filmComponent.getElement());
    render(new UserTitleView(), this.filmComponent.getElement());

    for (let i = 0; i < 4; i++) {
      render(new FilmCardView(), this.filmCardComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.boardComponent.getElement());
  };
}
