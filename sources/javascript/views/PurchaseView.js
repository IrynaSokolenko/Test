App.Views.PurchaseView = Backbone.View.extend({
    tagName: 'tr',

    template:  _.template(templates.get('purchase-raw-template')()),

    events: {
        'click': 'editPurchase',
        'click .delete-btn': 'deletePurchase'
    },

    initialize: function(){
        this._modelBinder = new Backbone.ModelBinder();
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this._modelBinder.bind(this.model, this.el);
        return this;
    },

    editPurchase: function () {
        var popup = new App.Views.PopupView({model: this.model});
        $('body').append(popup.render().el);
    },

    deletePurchase: function (event) {
        event.stopPropagation();
        Backbone.Mediator.pub('deletePurchase', this.model);
    }
});
