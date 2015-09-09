var Purchases = Backbone.Collection.extend({
	model: Purchase,
	
    initialize: function(){
			this.parse(response);
			console.log("Response initialize");
		},

		parse : function(response){
			console.log(response);
			return response;  
		}    
});