var PurchasesView = Backbone.View.extend({
    tagName: 'tr',

    html: '<td data-name="productName"></td><td data-name="storeName"></td><td data-name="description"></td><td data-name="price"></td><td><button class = "delete">Delete</button></td>',

    _modelBinder: undefined,

    initialize: function(){
        this._modelBinder = new Backbone.ModelBinder();
       // Backbone.Mediator.sub("AddPurchase", purchase);
    },

    render: function(){
        this.$el.html(this.html);
        this._modelBinder.bind(this.model, this.el, Backbone.ModelBinder.createDefaultBindings(this.el, 'data-name'));
        return this;
    }
});
