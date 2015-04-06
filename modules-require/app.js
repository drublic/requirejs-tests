// Main JS app
require([
  'slider',
  'modal'
], function (slider, modal) {
  modal.init();

  if (window.PERF) {
    window.PERF.end = +new Date();
  }
});
