import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'products',

	actions: {
		goToProduct: function(product) {
			this.transitionTo('product', product);
		}
	}
});
