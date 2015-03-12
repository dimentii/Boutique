// Karma configuration
// Generated on Tue Feb 24 2015 22:29:36 GMT+0300 (Russia TZ 2 Standard Time)

module.exports = function(config) {
  config.set({
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '../bin/debug',


      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine'],


      // list of files / patterns to load in the browser
      files: [
          'js/libs/jquery.js',
          'js/libs/modernizr.js',
          'js/libs/transition.js',
          'js/libs/collapse.js',
          'js/libs/angular.js',
          'js/libs/angular-route.js',
          'js/angular-touch-custom.js',
          'js/libs/angular-animate.js',

          '../../app/components/angular-mocks/angular-mocks.js',

          'js/app.js',
          'js/locationSrvc.js',
          'js/mappingSrvc.js',
          'js/navigatorSrvc.js',
          'js/navigationSrvc.js',
          'js/mainCtrl.js',
          'js/aboutCtrl.js',
          'js/brandCtrl.js',
          'js/dressCtrl.js',
          'js/familylookCtrl.js',
          'js/sizeplusCtrl.js',
          'js/navbarDirective.js',
          'js/scrollingDirective.js',
          'js/sectionDirective.js',

          'html/navbar.html',

          '../../test/libs/sinon-1.12.2.js',

          '../../test/unit/controllers/aboutCtrlSpec.js',
          '../../test/unit/controllers/brandCtrlSpec.js',
          '../../test/unit/controllers/dressCtrlSpec.js',
          '../../test/unit/controllers/familylookCtrlSpec.js',
          '../../test/unit/controllers/sizeplusCtrlSpec.js',
          '../../test/unit/controllers/mainCtrlSpec.js',

          '../../test/unit/services/navigationSrvcSpec.js',
          '../../test/unit/services/navigatorSrvcSpec.js',
          '../../test/unit/services/mappingSrvcSpec.js',

          '../../test/unit/directives/navbarDirectiveSpec.js',
          '../../test/unit/directives/scrollingDirectiveSpec.js',
          '../../test/unit/directives/sectionDirectiveSpec.js'
      ],


      // list of files to exclude
      exclude: [],


      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
          'html/navbar.html': 'html2js'
      },


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
          outputFile: '../../test/test-results.xml',
          suite: ''
      }


      // Plugins
  });
};
