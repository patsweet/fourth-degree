$(document).foundation();
(function($, Backbone){

    var App = {
        Models: {},
        Collections: {},
        Views: {},
        Templates: {}
    };

    App.Templates.Perp = _.template($("#perp_template").html());

    App.Models.Perp = Backbone.Model.extend();

    App.Collections.Perps = Backbone.Collection.extend({
        model: App.Models.Perp,
        url: 'data/perps.json',
        comparator: 'last_name',
        filtered: function() {
            return this.filter(function(perp){
                return perp.get('victim_age') <= +$("#victim_age_slider").attr('data-slider') &&
                perp.get('perp_age') <= +$("#perp_age_slider").attr('data-slider') &&
                perp.get('actual_prison_time') >= +$("#prison_time_slider").attr('data-slider');
            });
        }
    });



    App.Views.Modal = Backbone.View.extend({
        el: "#document_modal",
        reveal: function() {
            this.$el.foundation('reveal', 'open');
            return this;
        },
        renderNote: function(docId) {
            this.$(".document_modal_content").html(
                '<div id="DC-note-'+docId+'" class="DC-note-container" style="width:100%;heigh:600px;"></div>'
            );
            return this;
        },
        renderDocument: function(docId) {
            this.$(".document_modal_content")
                .html(
                    '<iframe src="http://php.delawareonline.com/news/documents/document.php?url=https://www.documentcloud.org/documents/'+docId+'.html" height="550" width="700" style="width:100%; min-width:600px;" frameBorder="0" scrolling="no"></iframe>'
                );
            return this;
        },
        loadNote: function(docId, noteId) {
            var docUrl = "//www.documentcloud.org/documents/" + docId + "/annotations/" + noteId + ".js";
            dc.embed.loadNote(docUrl);
            return this;
        },
    });

    App.Views.Perp = Backbone.View.extend({
        template: App.Templates.Perp,
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
            new App.Views.Modal().
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
            new App.Views.Modal().
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
            new App.Views.Modal()
                .renderDocument(
                    this.model.get('sentencing_transcript')
                )
                .reveal()
                ;
        }
    });

    App.Views.PerpList = Backbone.View.extend({
        el: "#perp_list",
        collection: new App.Collections.Perps(),
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
                $(this.el).append(new App.Views.Perp({model: perp}).render().el);
            }, this);
            $("#offender_count").html(this.collection.filtered().length);
            return this;
        },
        reorder: function(comparator){
            this.collection.comparator = comparator;
            this.collection.sort();
        }
    });

    App.Views.Main = Backbone.View.extend({
        el: ".tnj_app",
        events: {
            'change #sort_by': 'sortPerps',
            'change #victim_age_slider': 'filterPerps',
            'change #perp_age_slider': 'filterPerps',
            'change #prison_time_slider': 'filterPerps'
        },
        initialize: function() {
            this.perpListView = new App.Views.PerpList();
        },
        sortPerps: function() {
            this.perpListView.reorder($("#sort_by option:selected").val());
        },
        filterPerps: function() {
            this.perpListView.render();
        }
    });

    var appView = new App.Views.Main();

})(jQuery, Backbone);

