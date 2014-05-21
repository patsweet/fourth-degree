define([
  'jquery',
  'underscore',
  'backbone',
  'views/perp/list',
  'views/perp/richards'
], function($, _, Backbone, PerpListView, RichardsView){
    var MainView = Backbone.View.extend({
        el: ".tnj_app",
        events: {
            'change #sort_by': 'sortPerps',
            'change #victim_age_slider': 'filterPerps',
            'change #perp_age_slider': 'filterPerps',
            'change #prison_time_slider': 'filterPerps'
        },
        initialize: function() {
            this.perpListView = new PerpListView();
            this.richardsView = new RichardsView();
        },
        sortPerps: function() {
            this.perpListView.reorder($("#sort_by option:selected").val());
        },
        filterPerps: function() {
            this.perpListView.render();
        }
    });

    return MainView;
});
