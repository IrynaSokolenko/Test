var App = {
    Models: {},
    Collections: {},
    Views: {}
};

$(function () {
    var appView = new App.Views.PurchaseManagerView({collection: response, el: $('#purchase-manager')});
});
