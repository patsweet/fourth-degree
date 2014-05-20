function ie8isTerrible() {
    document.getElementsByTagName('body')[0].innerHTML = '<div style=\'clear: both; height: 112px; padding:0; position: relative;\'><a href="http://www.theie8countdown.com/ie-users-info"><img src="http://www.theie8countdown.com/assets/badge_iecountdown.png" border="0" height="112" width="348" alt="" /></a></div>';
    if ( window.confirm("Warning! The browser you are using is outdated, will not display this page properly and even has security issues. If you'd like information about updating your browser, click 'OK'.") ) {
        window.location.href = 'http://browsehappy.com/?locale=en';
    }

}

document.body.onload = ie8isTerrible;