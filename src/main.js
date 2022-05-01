import SortView from './view/sort-view.js';
import UserTitle from './view/user-title-view.js';
import {render} from './render.js';
import filmPresenter from './presenter/film-presenter.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main-navigation');

render(new UserTitle (), siteHeaderElement);
render(new SortView(), siteMainElement);

filmPresenter.init(siteMainElement);
