import Ember from 'ember';

export default Ember.Route.extend({

	// Preload so we can populate shopping cart
	model: function () {
	  return Ember.RSVP.hash({
	    products:  this.store.find('product')
	  });
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		var shoppingCart = this.store.createRecord('shopping-cart', {});
		controller.set('shoppingCart', shoppingCart);

		var self = this,
			productIDs = shoppingCart.getProductsIDsFromCookie();

		if (productIDs) {
			var recordPromises = productIDs.map(function(id) {
				return self.store.find('product', id);
			});

			var recordsLoaded = Ember.RSVP.all(recordPromises);

			recordsLoaded.then(addToShoppingCart);
		}

		function addToShoppingCart (records) {
			var shoppingCartProducts = shoppingCart.get('products');

			if (records && records.length) {
				records.forEach(function(record) {
					shoppingCartProducts.pushObject(record);
				});
			}
		}

	}
});
