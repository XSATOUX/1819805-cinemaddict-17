
import UserTitleView from './view/user-title-view.js';
import {render} from './render.js';
import FilmMenuView from './view/film-menu-view.js';
import FilmPresenter from './presenter/film-presenter.js';
import FilmModel from './mock/model/film-model.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const filmPresenter = new FilmPresenter();
const filmModel = new FilmModel();

render(new UserTitleView(), siteHeaderElement);
render(new FilmMenuView(), siteMainElement);

filmPresenter.init(siteMainElement, filmModel);
