import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books');
  this.route('authors');
  this.route('indiv-author', {path: '/indiv-author/:author_id'});
});

export default Router;
