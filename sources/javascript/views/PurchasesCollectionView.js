App.Views.PurchasesCollectionView = Backbone.View.extend({
    tagName: 'tbody',

    className: 'purchase-list',

    initialize: function(){
        Backbone.Mediator.sub('addNewPurchase', this.addPurchase,this);
        Backbone.Mediator.sub('deletePurchase', this.deletePurchase,this);
        this.render();
    },

    render: function(){
        var viewCreator = function(model){
                return new App.Views.PurchaseView({model: model});
            },
            elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator);

        this.$el.html('');
        this._collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
        this._collectionBinder.bind(this.collection, this.$el);
        return this;
    },

    addPurchase: function (model) {
        this.collection.add(model);
        this.render(this.collection);
    },

    deletePurchase: function (model) {
        this.collection.remove(model);
    },

    close: function () {

    }
});
