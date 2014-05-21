define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    var PerpModel = Backbone.Model.extend({
        isRichards: function() {
            return this.get('last_name') == 'Richards';
        }
    });
    return PerpModel;
});
