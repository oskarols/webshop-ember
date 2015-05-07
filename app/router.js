import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
    this.resource('products', {path: '/'}, function() {
        this.resource('product', {path: '/:id'});
    });
});
