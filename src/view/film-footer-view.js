import {createElement} from '../render.js';

const createFilmFooterTemplate = () => (
  `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`
);

export default class FilmFooterView{
  getTemplate() {
    return createFilmFooterTemplate();
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
