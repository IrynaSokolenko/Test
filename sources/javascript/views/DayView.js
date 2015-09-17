App.Views.DayView = Backbone.View.extend({
    tagName: "li",

    template: _.template(templates.get('day-template')()),

    events: {
        "click": "renderDayPurchases"
    },

    initialize: function(){
        this._modelBinder = new Backbone.ModelBinder();
    },

    render: function(){
        this.$el.html(this.template());
        this._modelBinder.bind(this.model, this.el, Backbone.ModelBinder.createDefaultBindings(this.el, 'data-name'));
        return this;
    },

    renderDayPurchases: function () {
        Backbone.Mediator.pub('ChangeDayPurchases', this.model);
    }
});

