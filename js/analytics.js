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