App.Views.PurchasesCollectionView = Backbone.View.extend({
    tagName: 'tbody',
    className: 'purchase-list',

    _modelBinder: undefined,

    initialize: function(){
        Backbone.Mediator.sub('addNewPurchase', this.addPurchase,this);
        Backbone.Mediator.sub('deletePurchase', this.deletePurchase,this);
        this.render();
    },

    render: function(){
        this.$el.html('');
        this._modelBinder = new Backbone.ModelBinder();
        var viewCreator = function(model){
            return new App.Views.PurchaseView({model: model});
        };

        var elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator);

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
    }
});
