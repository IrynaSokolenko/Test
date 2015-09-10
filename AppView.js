var CollectionView = Backbone.View.extend({
    tagName: 'li',

    html: '<li data-name="day"></li>',

    _modelBinder: undefined,

    initialize: function(){
        this._modelBinder = new Backbone.ModelBinder();

    },

    events: {
      "click": "changeDay"
    },

    render: function(){
        this.$el.html(this.html);
        this._modelBinder.bind(this.model, this.el, Backbone.ModelBinder.createDefaultBindings(this.el, 'data-name'));
        return this;
    },

    changeDay: function (){
        $('tbody').html('');
        var purchasesCollection = new Purchases((this.model.toJSON()).purchases);
        console.log(purchasesCollection);
        var viewCreator = function(model){
            return new PurchasesView({model: model});
        };

        var elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator);

        var collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
        collectionBinder.bind(purchasesCollection, $('tbody'));
        //var purchasesView = new PurchasesView({collection: this.model.purchases})

    }
});
