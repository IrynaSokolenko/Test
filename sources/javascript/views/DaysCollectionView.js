App.Views.DaysCollectionView = Backbone.View.extend({
    tagName: 'ul',

    className: 'list',

    initialize: function(){
        var viewCreator = function(model){
                return new App.Views.DayView({model: model});
            },
            elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator);

        this._modelBinder = new Backbone.ModelBinder();
        this._collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
        this.render();
    },

    render: function(){
        this._collectionBinder.bind(this.collection, this.$el);
        return this;
    }
});
