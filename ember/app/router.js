import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', { path: '/' });
  this.route('register');
  this.route('forgot-password');
  this.route('app', function() {
      this.route('dashboard');
      this.route('badges');
      this.route('activities');
      this.route('profile');
      this.route('signout');
  })
});

export default Router;