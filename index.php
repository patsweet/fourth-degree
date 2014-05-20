<!doctype html>
<html class="no-js" lang="en">
<head>
    <!--[if lt IE 9]>
        <script defer src="js/ie8isterrible.js"></script>
    <![endif]-->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fourth-degree Rape</title>
    <link rel="stylesheet" href="css/foundation.min.css" />
    <link rel="stylesheet" href="css/main.css">
    <script src="js/vendor/modernizr.js"></script>
    <script>
        var ad_web_service = '';
        var utag_data= {
            cst: ad_web_service,
            instance: 'prod', /* or 'qa' or 'prod' */
            partner_type: 'cobrand',
            pathName: 'http://php.delawareonline.com'+document.location.pathname,
            profile: 'wilmington',
            ssts: 'news/local'
        };
        function cobrandPageLoad(utag_data) {
            if (window.utag) {
                window.utag.view(utag_data);
            } else {
                utag_data.partner_type= 'basic';
                window.utag_data= utag_data;
                var profile= utag_data.profile || 'unspecifiedprofile';
                var instance= utag_data.instance || 'unspecifiedinstance';
                var uscript = document.createElement('script');
                uscript.async = true;
                uscript.type = 'text/javascript';
                uscript.src = '//tealium.hs.llnwd.net/o43/utag/gci/'+profile+'/'+instance+'/utag.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(uscript, node);
            }
        }
    </script>
    <script type="text/javascript" src="//www.delawareonline.com/static/js/cobrand/partner.js"></script>
</head>
<body onload="cobrandPageLoad(utag_data);" class="tnj_app">
    <iframe id="cobrand-header" src="//www.delawareonline.com/services/cobrand/header/" frameborder="0" scrolling="no"></iframe>
    <div style="height:40px;" id="top">&nbsp; <!-- Push elements below header. --> </div>
    <div class="row">
        <div class="large-12 columns">
            <h1>Fourth-degree Rape</h1>
            <p>
                Chatter goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, porro, tempora, voluptatem cum minus quasi consectetur aliquid accusamus numquam sint provident dolorem doloribus officia. Animi sit perspiciatis nemo illo obcaecati!
            </p>
        </div>
    </div>
    <div class="row" id="filters">
        <div class="filter small-6 medium-3 large-3 columns">
            <label for="">Max victim age: <span class="victim_age"></span></label>
            <div id="victim_age_slider" class="range-slider" data-slider="16" data-options="start:3; end:16;step:1;display_selector:.victim_age;">
                <span class="range-slider-handle"></span>
                <span class="range-slider-active-segment"></span>
                <input type="hidden">
            </div>
        </div>
        <div class="filter small-6 medium-3 large-3 columns">
            <label for="">Max offender age: <span class="offender_age"></span></label>
            <div id="perp_age_slider" class="range-slider" data-slider="40" data-options="start:18;end:40;step:1;display_selector:.offender_age;">
                <span class="range-slider-handle"></span>
                <span class="range-slider-active-segment"></span>
                <input type="hidden">
            </div>
        </div>
        <div class="filter small-6 medium-3 large-3 columns">
            <label for="">Min. time served: <span class="prison_time"></span> months</label>
            <div id="prison_time_slider" class="range-slider" data-slider="0" data-options="start:0;end:42;step:1;display_selector:.prison_time;">
                <span class="range-slider-handle"></span>
                <span class="range-slider-active-segment"></span>
                <input type="hidden">
            </div>
        </div>
        <div class="filter small-6 medium-3 large-3 columns">
            <label for="">Sort by:</label>
            <select name="sort_by" id="sort_by">
                <option value="last_name">Last Name</option>
                <option value="victim_age">Victim Age</option>
                <option value="perp_age">Offender Age</option>
                <option value="actual_prison_time">Time served</option>
            </select>
        </div>
        <hr>
    </div>
    <div class="row">
        <p>
            Showing <span id="offender_count"></span> of 16.
        </p>
        <div class="small-12 medium-12 large-12 columns" id="perp_list">
        </div>
        <div class="small-12 medium-12 large-12 columns">
            <div class="right">
                <a href="#top" class="button">Back to top</a>
            </div>
        </div>
        <hr>
    </div>
    <iframe src="http://www.delawareonline.com/services/cobrand/footer/" frameborder="0" scrolling="no" style="width:100%;height:232px;"></iframe>

    <script type="text/template" id="perp_template">
        <div class="perp small-12 medium-12 large-12 columns panel">
            <img src="<%= mugshot %>" class="mugshot" alt="">
            <div class="info row">
                <h2><%= displayName %></h2>
                <div class="small-12 medium-12 large-6 columns">
                    <p>
                        <strong>Victim age:</strong> <%= victim_age_display %>
                    </p>
                    <p>
                        <strong>Judge:</strong> <%= judge %>
                    </p>
                    <p>
                        <strong>Sentence:</strong> <%= prison_sentence_display %>
                    </p>
                </div>
                <div class="small-12 medium-12 large-6 columns">
                    <p>
                        <strong>Offender age:</strong> <%= perp_age %>
                    </p>
                    <p>
                        <strong>Sentence date:</strong> <%= sentence_date %>
                    </p>
                    <p>
                        <strong>Actual prison time:</strong> <%= actual_prison_time_display %>
                    </p>
                </div>
            </div>
        </div>
    </script>
    <!-- jQuery -->
    <script type="text/javascript" src="http://code.jquery.com/jquery.js"></script>
    <!-- Backbone -->
    <script type="text/javascript" src="js/vendor/underscore.min.js"></script>
    <script type="text/javascript" src="js/vendor/backbone.min.js"></script>
    <!-- Foundation -->
    <script type="text/javascript" src="js/foundation.min.js"></script>
    <!-- Main -->
    <script type="text/javascript" src="js/main.js"></script>
    <script type="json/pageinfo" class="pageinfo">
        {"comma_ssts": "news,local",
        "canonical": "http://php.delawareonline.com/news/2014/home-sales/",
        "byline": "Patrick Sweet",
        "contenttype": "story interactive",
        "headline": "Fourth-degree rape",
        "ssts": "news/local",
        "texttype": "interactive",
        "googlenewskeyword": "delaware, crime",
        "description": "",
        "seotitle": "Fourth-degree rape sentences",
        "aws": "news/local",
        "section_name": "news",
        "full_url": "http://php.delawareonline.com/news/2014/fourth-degree/",
        "blogname": "",
        "published_date": "2014-05-24",
        "excludeTransitionAd": true}
    </script>
</body>
</html>
</body>
</html>