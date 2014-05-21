define([
    'jquery',
    'underscore',
    'backbone',
    'views/modal',
    'text!../../../templates/perp.html'
], function($, _, Backbone, ModalView, perpTemplate){
    var PerpView = Backbone.View.extend({
        template: _.template(perpTemplate),
        events: {
            "click .prison-sentence-modal": "launchPrisonModal",
            "click .plea-agreement-modal": "launchPleaModal",
            "click .sentencing-transcript-modal": "launchSentencingModal"
        },
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },
        launchPrisonModal: function() {
            new ModalView().
            renderNote(
                this.model.get('sentencing_order')[1]
            ).
            reveal().
            loadNote(
                this.model.get('sentencing_order')[0],
                this.model.get('sentencing_order')[1]
            );
        },
        launchPleaModal: function() {
            new ModalView().
            renderNote(
                this.model.get('plea_agreement')[1]
            ).
            reveal().
            loadNote(
                this.model.get('plea_agreement')[0],
                this.model.get('plea_agreement')[1]
            );
        },
        launchSentencingModal: function() {
            new ModalView()
            .renderDocument(
                this.model.get('sentencing_transcript')
            )
            .reveal()
            ;
        }
    });
    
    return PerpView;
});
