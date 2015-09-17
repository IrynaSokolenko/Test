App.Views.PopupView = Backbone.View.extend({
    className: 'popup',

    template:  _.template(templates.get('popup-template')()),

    events: {
        'click .popup-close': 'cancel',
        'click #add-popup': 'addPurchase',
        'click #cancel-popup': 'cancel',
        'click #save-popup': 'savePurchase',
        'click #remove': 'removePurchase'
    },

    initialize: function () {
        this.initialModel = this.model;
        this._modelBinder = new Backbone.ModelBinder();
    },

    render: function () {
        if (this.model) {
            this.renderPopupEdit();
        } else {
            this.model = new App.Models.PurchaseModel();
            this.renderPopupCreate();
        }

        this.setValidation();
        this._modelBinder.bind(this.model, this.el);

        return this;
    },

    setValidation: function () {
        Backbone.Validation.bind(this, { model: this.model });
        Backbone.Validation.bind(this, {
            valid: function(view, attr) {
                view.$el.find('[data-name=' + attr + '].warning').hide();
            },
            invalid: function(view, attr, error) {
                view.$el.find('[data-name=' + attr + '].warning').show();
            }
        });
    },

    renderPopupCreate: function () {
        this.$el.html(this.template, this);
        this.$el.find('#add-popup').show();
        this.$el.find('#save-popup').hide();
        this.$el.find('#remove').hide();
        return this;
    },

    renderPopupEdit: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.find('h1').val('Edit purchase');

        this.$el.find('#add-popup').hide();
        this.$el.find('#save-popup').show();
        this.$el.find('#remove').show();
        return this;
    },

    cancel: function () {
        this.model = this.initialModel;
        this.$el.remove();
    },

    addPurchase: function () {
        this.model.validate();
        if (this.model.isValid()) {
            this.$el.remove();
            Backbone.Mediator.pub('addNewPurchase', this.model);
        }
    },

    savePurchase: function () {
        this.model.validate();
        if (this.model.isValid()) {
            this.$el.remove();
            Backbone.Mediator.pub('editPurchase', this.model);
        }
    },

    removePurchase: function () {
        this.remove();
        Backbone.Mediator.pub('deletePurchase', this.model);
    },

    close: function () {
        this._modelBinder.unbind();
    }
});