var PurchasesView = Backbone.View.extend({
	tagName: "tbody",		
	
	initialize: function () {
		this.render();	
	},

	render: function () {
	    $(".purchase-list").html('');
		console.log(this.collection);
		_.each(this.collection, function (purchase) {
			var purchaseView = new PurchaseView({model: purchase});
			$(".purchase-list").append(purchaseView.render().el);
        });			
		return this;	
	}
});


