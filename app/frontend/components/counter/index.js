import { Controller } from "@hotwired/stimulus";

import './index.scss';

export default class extends Controller {
  static targets = ['counter'];

  connect() {
    this.count = 0;
    this.render();
  }

  click() {
    this.count += 1;
    this.render();
  }

  render() {
    this.counterTarget.innerHTML = this.count;
  }
}
