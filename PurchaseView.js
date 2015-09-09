var PurchaseView = Backbone.View.extend ({
	tagName: "tr",
	
	template: _.template($("#raw_template").html()),
	
    className: "purchase-item",

	initialize: function () {
        this.render();
    },

	render: function () {
		this.$el.html(this.template(this.model));
		return this;
	},  
	
	events: {
		"click": "preview" 
	},
	
	preview: function () {
	console.log('pub');
		Backbone.Mediator.pub("DayPreview", this.model);
	}

});