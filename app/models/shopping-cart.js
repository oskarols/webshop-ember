import Ember from 'ember';
import DS from 'ember-data';

var attr = DS.attr,
	hasMany = DS.hasMany;

var Cookies = window.Cookies,
	PRODUCT_COOKIE_KEY = 'cartproducts';

export default DS.Model.extend({
	products: DS.hasMany('product'),

	// -> Array
	getProductsIDsFromCookie: function() {
		var cookieString = Cookies.get(PRODUCT_COOKIE_KEY),
			productIDs = cookieString && cookieString.split(',');

		return productIDs || [];
	},

	updateCookieData: function() {
		var productIDs = this.get('products');

		updateCookieIDs(productIDs);

		function updateCookieIDs (records) {
			var IDs = records.mapBy('id');

			Cookies.set(PRODUCT_COOKIE_KEY, IDs, {expires: 7, path: '/'});
		}
	}.observes('products.@each')
});