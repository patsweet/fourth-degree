define([
    'jquery',
    'underscore',
    'foundation',
    'backbone'
], function($, _, foundation, Backbone){
    var ModalView = Backbone.View.extend({
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
    return ModalView;
});
