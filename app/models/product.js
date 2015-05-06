import Ember from 'ember';
import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
	name: attr('string'),
	price: attr('number')
});