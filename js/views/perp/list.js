define([
    'jquery',
    'underscore',
    'backbone',
    'collections/perps',
    'views/perp/perp'
], function($, _, Backbone, PerpsCollection, PerpView){
    var PerpListView = Backbone.View.extend({
        el: "#perp_list",
        collection: new PerpsCollection(),
        initialize: function() {
            _.bindAll(this, "render");
            this.collection.bind("reset", this.render);
            this.collection.bind("change", this.render);
            this.collection.bind("sort", this.render);
            this.collection.fetch({reset:true});
            return this;
        },
        render: function() {
            $(this.el).empty();
            _.each(this.collection.filtered(), function(perp) {
                $(this.el).append(new PerpView({model: perp}).render().el);
            }, this);
            $("#offender_count").html(this.collection.filtered().length);
            return this;
        },
        reorder: function(comparator){
            this.collection.comparator = comparator;
            this.collection.sort();
        }
    });

    return PerpListView;
});
