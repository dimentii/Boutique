// Karma configuration
// Generated on Tue Feb 24 2015 22:29:36 GMT+0300 (Russia TZ 2 Standard Time)

module.exports = function(config) {
  config.set({
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '../app',


      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine'],


      // list of files / patterns to load in the browser
      files: [
          'components/jquery/dist/jquery.js',
          'components/bootstrap/js/transition.js',
          'components/bootstrap/js/collapse.js',
          'components/angular/angular.js',
          'components/angular-route/angular-route.js',
          'source/features/navigation/angular-touch-custom.js',
          'components/angular-animate/angular-animate.js',
          'components/angular-mocks/angular-mocks.js',

          'source/**/*.js',

          '../test/unit/controllers/aboutCtrlSpec.js',
          '../test/unit/controllers/brandCtrlSpec.js',
          '../test/unit/controllers/dressCtrlSpec.js',
          '../test/unit/controllers/familylookCtrlSpec.js',
          '../test/unit/controllers/sizeplusCtrlSpec.js',
          '../test/unit/controllers/mainCtrlSpec.js'
      ],


      // list of files to exclude
      exclude: [],


      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {},


      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress', 'junit'],


      // web server port
      port: 9876,


      // enable / disable colors in the output (reporters and logs)
      colors: true,


      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,


      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['Chrome'],


      captureTimeout: 10000,


      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false,

      // the default configuration
      junitReporter: {
          outputFile: '../test/test-results.xml',
          suite: ''
      }
  });
};
