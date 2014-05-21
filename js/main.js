require.config({
    shim: {
        'foundation.min': {
            deps: ['vendor/jquery'],
            exports: 'Foundation'
        }
    },
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

    $(function() {
        $(document).foundation();
    });

    new MainView();
});
