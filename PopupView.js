var PopupView = Backbone.View.extend({
    className: 'popup',

    events: {
        'click .popup-close': 'close',
        'click #add-popup': 'add',
        'click #cancel-popup': 'close'
    },

    initialize: function () {
        this.template =  _.template($('#popup-template').html());
    },

    render: function () {
        this.$el.addClass('popup-active');
        this.$el.html(this.template, this);

        return this;
    },

    close: function () {
        this.$el.remove();
    },

    add: function () {
        var purchase = new Purchase({
            purchaseName: $('#purchaseName').val(),
            storeName: $('#storeName').val(),
            description: $('#description').val(),
            price: $('#price').val()
        });
        console.log(purchase.toJSON());
        //Backbone.Mediator.pub("AddPurchase", purchase);
        this.$el.remove();
    }

});