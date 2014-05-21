require.config({
    paths: {
        jquery: 'vendor/jquery',
        foundation: 'foundation.min',
        underscore: 'vendor/underscore.min',
        backbone: 'vendor/backbone.min'
    }
});

require([
    'jquery',
    'foundation',
    'views/main'
], function($, foundation, MainView){
    $(document).foundation();
    new MainView();
});
