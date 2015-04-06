(function () {
  window.PERF.current = +new Date();

  /**
   * Helper
   */
  var $ = function (selector) {
    return document.querySelector(selector);
  };

  var tempalte = '<div class="time">' +
    '<div class="time__config">After Config {{config}}ms</div>' +
    '<div class="time__load">Full {{load}}ms</div>' +
    '</div>';

  var parseTemplate = function (template, data) {
    var item = '';

    for (item in data) {
      template = template.replace('{{' + item + '}}', data[item]);
    }

    return template;
  };

  var insertHtml = function ($element, html) {
    $element.innerHTML = html;
  };

  var measureTime = function (perf) {
    var html = parseTemplate(tempalte, {
      config: perf.config - perf.start,
      load: perf.end - perf.start
    });

    var $element = $('.perf');

    insertHtml($element, html);
  };

  // Initialize work
  var init = function () {
    if (window.PERF && window.PERF.end) {
      measureTime(window.PERF);
      tracking.track();
    } else {
      setTimeout(function () {
        init();
      }, 50);
    }
  };

  init();
}());
