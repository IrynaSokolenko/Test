App.Views.PurchaseView = Backbone.View.extend({
    tagName: 'tr',

    template: _.template($("#purchase-raw-template").html()),

    _modelBinder: undefined,

    events: {
        'click': 'editPurchase',
        'click .delete': 'deletePurchase'
    },

    initialize: function(){
        this._modelBinder = new Backbone.ModelBinder();

        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this._modelBinder.bind(this.model, this.el, Backbone.ModelBinder.createDefaultBindings(this.el, 'data-name'));
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
