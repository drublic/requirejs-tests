// Config
requirejs.config({
  baseUrl: 'modules-require',
  deps: [
    '../node_modules/lodash/index',
    'app'
  ],

  paths: {
    jquery: '../node_modules/jquery/dist/jquery'
  }
});

if (window.PERF) {
  window.PERF.config = +new Date();
}
