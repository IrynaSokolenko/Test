var DayView = Backbone.View.extend ({
	tagName: "li",
	template: _.template("<%= day %>"),

	render: function () {
		this.$el.html(this.template(this.model));
		return this;
	},  
	
	events: {
		"click": "preview" 
	},
	
	preview: function () {
		var purchasesView = new PurchasesView({collection: this.model.purchases});
	}

});