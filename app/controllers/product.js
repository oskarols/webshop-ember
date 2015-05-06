import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	description: null,

	addedToCart: function() {
		var content = this.get('content'),
			appController = this.get('controllers.application'),
			shoppingCart = appController.get('shoppingCart');

		var hasBeenAdded = shoppingCart.get('products').any(function(record) {
			console.log('comparing', record.get('id'), content.get('id'));
			return record.get('id') === content.get('id');
		});

		return hasBeenAdded;

		// TODO: Hack since relying on content to not persist the same
		// attribute across multiple detail pages
	}.property('controllers.application.shoppingCart.products.length', 'content')
});
