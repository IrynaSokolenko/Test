var AppView = Backbone.View.extend ({
	el: $("#list"),

	initialize: function () {
	    var purchasesView = new PurchasesView({collection: this.collection[0].purchases}),
		dayInfoView = new DayInfoView({model: this.collection[0]});
		
		this.render();	
	},

	render: function () {
        _.each(this.collection, function (day) {
			var day_view = new DayView({model: day});
			$("#list").append(day_view.render().el);			
		});
		
	}
});