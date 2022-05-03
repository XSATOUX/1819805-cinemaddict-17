import SortView from './view/sort-view.js';
import UserTitleView from './view/user-title-view.js';
import {render} from './render.js';
import ShowMoreButtonView from './view/show-more-button-view.js';
import FilmCardView from './view/film-card-view.js';
import FilmMenuView from './view/film-menu-view.js';
// import FilmPresenter from './presenter/film-presenter.js';
import FilmContainerView from './view/film-container-view.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
// const filmPresenter = new FilmPresenter();

render(new UserTitleView(), siteHeaderElement);
render(new FilmMenuView(), siteMainElement);
render(new SortView(), siteMainElement);
render(new FilmCardView(), siteMainElement);
render(new FilmContainerView(), siteMainElement);

render(new ShowMoreButtonView(), siteMainElement);

// filmPresenter.init(siteMainElement);
