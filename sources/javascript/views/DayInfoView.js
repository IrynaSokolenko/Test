App.Views.DayInfoView = Backbone.View.extend({
    tagName: 'label',

    template: _.template(templates.get('day-label-template')()),

    initialize: function () {
        this._modelBinder = new Backbone.ModelBinder();
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this._modelBinder.bind(this.model, this.el);
        return this;
    },

    close: function () {
        this._modelBinder.unbind();
    }
});
