import EmberRouter from '@ember/routing/router';
import config from 'my-ember-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('submit-form');
});
