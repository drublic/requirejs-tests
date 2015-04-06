var tracking = {};

(function () {
  'use strict';

  /* jshint ignore:start */
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;e=o.createElement(i);r=o.getElementsByTagName(i)[0];e.src='//www.google-analytics.com/analytics.js';r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  /* jshint ignore:end */

  ga('create', 'UA-41497561-3');
  ga('send', 'pageview');

  tracking.track = function () {
    var perf = window.PERF;
    var params;
    var config;
    var end;

    if (perf) {
      params = {
        'entry.1133391059': perf.name
      };

      if (perf.name == 'require-pure') {
        config = 'entry.452502421';
        end = 'entry.1547074794';
      } else if (perf.name == 'require-rjs') {
        config = 'entry.296600597';
        end = 'entry.726518118';
      } else if (perf.name == 'vanilla') {
        config = 'entry.1578035486';
        end = 'entry.226967064';
      } else if (perf.name == 'vanilla-optimized') {
        config = 'entry.44164972';
        end = 'entry.2055924575';
      }

      params[config] = perf.config - perf.start;
      params[end] = perf.end - perf.start;

      params['entry.1515444226'] = navigator.userAgent;

      $.ajax({
        url: 'https://docs.google.com/forms/d/1BHTjm_967OKmuHSGDdvMi87XGWFN-GPDydJ5W7QN9GI/formResponse',
        data: params,
        method: 'POST',
        dataType: 'xml'
      });
    }
  };
}());
