define([
    'jquery',
    'underscore',
    'backbone',
    'collections/perps',
    'views/perp/perp'
], function($, _, Backbone, PerpsCollection, PerpView){
    var RichardsView = Backbone.View.extend({
        el: "#richards",
        collection: new PerpsCollection(),
        initialize: function() {
            _.bindAll(this, "render");
            this.collection.bind("reset", this.render);
            return this;
        },
        render: function() {
            this.model = this.collection.richards();
            $(this.el).append(new PerpView({model: this.model}).render().el);
            return this;
        },
    });

    return RichardsView;
});
