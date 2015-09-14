App.Views.PopupView = Backbone.View.extend({
    className: 'popup',

    template: _.template($('#popup-template').html()),

    _modelBinder: undefined,

    events: {
        'click .popup-close': 'close',
        'click #add-popup': 'add',
        'click #cancel-popup': 'close',
        'click #save-popup': 'save'
    },

    initialize: function () {
        this.initialModel = this.model;
        this._modelBinder = new Backbone.ModelBinder();
    },

    render: function () {
        if (this.model) {
            this.renderPopupEdit()
        } else {
            this.model = new App.Models.PurchaseModel();
            this.renderPopupCreate();
        }
        this._modelBinder.bind(this.model, this.el, Backbone.ModelBinder.createDefaultBindings(this.el, 'data-name'));
        Backbone.Validation.bind(this);
        return this;
    },

    renderPopupCreate: function () {
        this.$el.html(this.template, this);
        this.$el.find('#add-popup').show();
        this.$el.find('#save-popup').hide();
        return this;
    },

    renderPopupEdit: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.find('#add-popup').hide();
        this.$el.find('#save-popup').show();

        Backbone.Validation.bind(this);
        return this;
    },

    close: function () {
        this.model = this.initialModel;
        this.$el.remove();

        console.log(this.model);
    },

    add: function () {
        console.log(this.model.isValid());
        this.$el.remove();
        Backbone.Mediator.pub('addNewPurchase', this.model);
    },

    save: function () {
        console.log(this.model);
//        this.model.set({purchaseName: $('#purchaseName').val(),
//            storeName: $('#storeName').val(),
//            description: $('#description').val(),
//            price: $('#price').val()
//        });
        this.$el.remove();
        Backbone.Mediator.pub('editPurchase', this.model);
    }
});