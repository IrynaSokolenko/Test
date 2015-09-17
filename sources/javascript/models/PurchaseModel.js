App.Models.PurchaseModel = Backbone.Model.extend({
    validation: {
        purchaseName: {
            required: true
        },
        storeName: {
            required: true
        },

        description: {
            required: true
        },

        price: {
            range: [5, 1000000000]
        }
    }
});