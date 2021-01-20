import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = [ "something" ]

  connect() {
    console.log('Hello World');
    console.log(this.somethingTarget);
  }

}