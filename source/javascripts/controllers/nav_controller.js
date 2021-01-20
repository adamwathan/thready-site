import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = [ "mobileNav" ]

  connect() {
    console.log('Nav');
  }

  open() {
    this.mobileNavTarget.classList.remove("hidden");
  }

  close() {
    this.mobileNavTarget.classList.add("hidden");
  }

}