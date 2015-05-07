import Ember from 'ember';

// TODO: Turn this into a Ember.computed macro
var ContentRowMixin = Ember.Mixin.create({
	ITEMS_PER_ROW: Ember.required(),

	rows: function() {
		var content = this.getWithDefault('content', []),
			self = this;

		var rows = [],
			currentRow = null;

		content.forEach(function(item, index) {

			// either initial state, or need new row (surpassed index of last)
			if (!Ember.isArray(currentRow) || index % self.ITEMS_PER_ROW === 0) {
				currentRow = [];
				rows.pushObject(currentRow);
			}

			currentRow.pushObject(item);
		});

		return rows;
	}.property('content.@each')
});

export default Ember.ArrayController.extend(ContentRowMixin, {
	ITEMS_PER_ROW: 3
});