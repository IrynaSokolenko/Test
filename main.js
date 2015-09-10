$().ready(function () {
    var App = {};

    var collection = new Days(response),
        collectionView = new CollectionView(),
        purchasesCollection = new Purchases(response[0].purchases),
        purchasesView = new PurchasesView();

    var viewCreator = function(model){
        return new CollectionView({model: model});
    };

    var elManagerFactory = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator);

    var collectionBinder = new Backbone.CollectionBinder(elManagerFactory);

    collectionBinder.bind(collection, $('ul'));

    var viewCreator1 = function(model){
        return new PurchasesView({model: model});
    };

    var elManagerFactory1 = new Backbone.CollectionBinder.ViewManagerFactory(viewCreator1);

    var collectionBinder1 = new Backbone.CollectionBinder(elManagerFactory1);
    collectionBinder1.bind(purchasesCollection, $('tbody'));

    $('#popup').click(function () {
        var popup = new PopupView();
        $('body').append(popup.render().el);
    });

});




	
