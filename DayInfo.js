var DayInfoView = Backbone.View.extend({
	tagName: 'div',
	
	className: 'day-info',
	
	template: _.template($('#day-info-template').html()),
	
	
	
	initialize: function () {
		this.render();
	},
	
	render: function () {
	    console.log(this.model);
	    $('.day-info').html(this.template(this.model));
		
		return this;  
	},
	
	events: {
		"click #popup": "add" 
	},
	
	
	add: function () {
		console.log('add');
	}
})