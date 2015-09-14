App.Views.PurchaseManagerView = Backbone.View.extend({

    template: _.template($('#purchase-manager-template').html()),

    events: {
        'click #popup': 'createNewPurchase'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template());

        this.renderDays();
        this.renderPurchases();
    },

    renderDays: function () {
        var daysCollection = new App.Collections.DaysCollection(this.collection),
            daysView = new App.Views.DaysCollectionView({ collection: daysCollection, el: this.$el.find("#list")});
    },

    renderPurchases: function () {
        var date = new Date();

        var purchasesCollection = new App.Collections.PurchasesCollection((this.collection[date.getDay()]).purchases),
            purchasesView = new App.Views.PurchasesCollectionView({ collection: purchasesCollection, el: this.$el.find(".purchase-list")});
    },

    createNewPurchase: function () {
        var popup = new App.Views.PopupView({collection: (this.collection[0]).purchases});
        $('body').append(popup.render().el);
    }
});