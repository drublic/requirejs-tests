({
  baseUrl: 'modules-require',
  mainConfigFile: 'modules-require/index.js',
  removeCombined: true,
  findNestedDependencies: true,
  preserveLicenseComments: false,
  dir: 'build-require',
  modules: [{
    name: 'index',
    include: [
      '../node_modules/requirejs/require.js'
    ]
  }]
})
