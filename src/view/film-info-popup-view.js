import {createElement} from '../render.js';

const createFilmInfoPopupTemplate = () => '<section class="film-details"></section>';


export default class FilmInfoPopupView{
  getTemplate() {
    return createFilmInfoPopupTemplate();
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
