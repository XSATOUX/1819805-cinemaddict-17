
import UserTitleView from './view/user-title-view.js';
import {render} from './render.js';
import FilmMenuView from './view/film-menu-view.js';
import FilmPresenter from './presenter/film-presenter.js';
import FilmsModel from './model/films-model.js';
// import FilmFooterView from './view/film-footer-view.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');


// const siteStatisticsElement = document.querySelector('.footer__statistics');
const filmPresenter = new FilmPresenter();
const filmsModel = new FilmsModel();

render(new UserTitleView(), siteHeaderElement);
render(new FilmMenuView(), siteMainElement);
// render(new FilmFooterView(), siteStatisticsElement);


filmPresenter.init(siteMainElement, filmsModel);
