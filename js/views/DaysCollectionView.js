App.Views.DaysCollectionView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',

    _modelBinder: undefined,

    initialize: function(){
        this._modelBinder = new Backbone.ModelBinder();
        var viewCreator = function(model){
            return new App.Views.DayView({model: model});
        };

        var elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator);

        this._collectionBinder = new Backbone.CollectionBinder(elManagerFactory);
        this.render();
    },

    render: function(){
        this._collectionBinder.bind(this.collection, this.$el);

        return this;
    }
});
