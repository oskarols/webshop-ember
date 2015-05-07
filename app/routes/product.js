import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('product', params.id);
	},

	afterModel: function(model) {
		var id = model.get('id'),
			controller = this.controllerFor('product');

		if (id === undefined) {
			return;
		}

		var fetchedDetails = ajax('/api/product_details/' + id);

		fetchedDetails.then(handleProductDetails);

		function handleProductDetails (response) {
			var data = response['product-details'];

			controller.setProperties({
				description: data.description
			});
		}
	},

	actions: {
		addToCart: function(model) {
			var appController = this.controllerFor('application'),
				shoppingCart = appController.get('shoppingCart'),
				shoppingCartProducts = shoppingCart.get('products');

			shoppingCartProducts.pushObject(model);
		}
	}
});
