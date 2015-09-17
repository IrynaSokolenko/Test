App.Views.PurchaseManagerView = Backbone.View.extend({

    template:  _.template(templates.get('purchase-manager-template')()),

    events: {
        'click #popup': 'createNewPurchase'
    },

    initialize: function () {
        this.date = new Date();
        Backbone.Mediator.sub('ChangeDayPurchases', this.renderDay, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        this.renderDays();
        this.renderDay();
    },

    renderDay: function (dayModel) {
        var dayModel = dayModel || new App.Models.DayModel({day: this.collection[this.date.getDay()].day}),
            dayInfoView = new App.Views.DayInfoView({model: dayModel, el: this.$el.find("#day-label")});
        this.renderPurchases(dayModel);
    },

    renderDays: function () {
        var daysCollection = new App.Collections.DaysCollection(this.collection),
            daysView = new App.Views.DaysCollectionView({ collection: daysCollection, el: this.$el.find("#list")});
    },

    renderPurchases: function (dayModel) {
        var collection = _.findWhere(this.collection, {day: dayModel.get('day')}).purchases || this.collection[this.date.getDay()].purchases;
        var purchasesCollection = new App.Collections.PurchasesCollection(collection),
            purchasesView = new App.Views.PurchasesCollectionView({ collection: purchasesCollection, el: this.$el.find(".purchase-list")});
    },

    createNewPurchase: function () {
        var popup = new App.Views.PopupView({collection: (this.collection[0]).purchases});
        $('body').append(popup.render().el);
    }
});