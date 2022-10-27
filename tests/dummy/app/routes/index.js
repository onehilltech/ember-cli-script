import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service
  script;

  beforeModel () {
    return this.script.load ('https://js.stripe.com/v3/');
  }
}
