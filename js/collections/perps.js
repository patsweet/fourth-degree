define([
    'jquery',
    'underscore',
    'backbone',
    'models/perp'
], function($, _, Backbone, PerpModel){
    var PerpsCollection = Backbone.Collection.extend({
        model: PerpModel,
        url: 'data/perps.json',
        comparator: 'last_name',
        initialize: function() {
            this.fetch({reset:true});
            return this;
        },
        richards: function() {
            var richard = this.filter(function(perp){
                return perp.isRichards();
            });
            if (richard.length > 0) {
                return richard[0];
            }
            return [];
        },
        filtered: function() {
            return this.filter(function(perp){
                return perp.get('victim_age') <= +$("#victim_age_slider").attr('data-slider') &&
                perp.get('perp_age') <= +$("#perp_age_slider").attr('data-slider') &&
                perp.get('actual_prison_time') <= +$("#prison_time_slider").attr('data-slider') &&
                !perp.isRichards();
            });
        }
    });

    return PerpsCollection;
});
