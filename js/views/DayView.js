
App.Views.DayView = Backbone.View.extend({
    tagName: "li",

    template: _.template($('#day-template').html()),

    initialize: function(){
        this._modelBinder = new Backbone.ModelBinder();
    },

    render: function(){
        this.$el.html(this.template({day: this.model.get('day')}));
        this._modelBinder.bind(this.model, this.el, Backbone.ModelBinder.createDefaultBindings(this.el, 'data-name'));
        return this;
    },

    renderDayPurchases: function () {
        console.log((this.model.toJSON()).purchases);
        var purchasesCollection = new App.Collections.PurchasesCollection((this.model.toJSON()).purchases);
        var purchasesCollectionView = new App.Views.PurchasesCollectionView({collection: purchasesCollection, el: $(".purchase-list")});
    },

    events: {
        "click": "renderDayPurchases"
    }
});

