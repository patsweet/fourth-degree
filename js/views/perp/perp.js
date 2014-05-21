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
            "click .sentencing-transcript-modal": "launchSentencingModal",
            "click .probable-cause-modal": "launchProbableCauseModal"
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
        launchSentencingModal: function() {
            new ModalView()
            .renderDocument(
                this.model.get('sentencing_transcript')
            )
            .reveal()
            ;
        },
        launchProbableCauseModal: function() {
            new ModalView()
            .renderDocument(
                this.model.get('prob_cause')
            )
            .reveal()
            ;
        }
    });

    return PerpView;
});
