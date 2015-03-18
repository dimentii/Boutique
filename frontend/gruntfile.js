module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		clean: {
			options: { force: true },
			all: {
				src: ['bin/**/*.*']
			},
			debug: {
				src: ['bin/debug/**/*.*']
			},
			release: {
				src: ['bin/release/**/*.*', 'bin/app_build/**/*.*']
			}
		},

		less: {
		    debug: {
		        options: {
		            compress: false
		        },
		        files: {
		            "bin/debug/css/bootstrap.css": "css/bootstrap/base.less"
		        }
		    },
			release: {
				options: {
					compress: true
				},
				files: {
					"bin/app_build/css/bootstrap.min.css": "css/bootstrap/base.less"
				}
			}
		},

		ngAnnotate: {
		    options: {
		        singleQuotes: true,
				flatten: true
		    },
		    release: {
		        files: [
                    {
                        expand: true,
                        cwd: 'app/source',
                        src: ['**/*.js'],
                        dest: 'bin/app_build/js',
                        ext: '.js'
                    }
		        ]
		    }
		},

		copy: {
			debug: {
				files: [
					{
						expand: true,
						cwd: 'app/components/',
						src: [
							'angular/angular.js',
							'angular-animate/angular-animate.js',
							'angular-route/angular-route.js',
							'bootstrap/js/transition.js',
							'bootstrap/js/collapse.js',
							'jquery/dist/jquery.js',
							'modernizr/modernizr.js'
						],
						dest: 'bin/debug/js/libs',
						flatten: true,
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'app/source',
						src: [
							'**/*.js'
						],
						dest: 'bin/debug/js',
						flatten: true,
						filter: 'isFile'
					},
					{
						expand: true,
						src: [
							'css/*.css',
							'app/components/normalize.css/normalize.css'
						],
						dest: 'bin/debug/css',
						flatten: true,
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'fonts/',
						src: [
							'**/*.*'
						],
						dest: 'bin/debug/fonts',
						flatten: true,
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'images/',
						src: [
							'**/*.*'
						],
						dest: 'bin/debug/images',
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'app/source',
						src: ['index.html'],
						dest: 'bin/debug',
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'app/source',
						src: [
							'views/**/*.html',
							'features/**/*.html'
						],
						dest: 'bin/debug/html',
						flatten: true,
						filter: 'isFile'
					}
				]
			},
			release: {
				files: [
					{
						expand: true,
						cwd: 'app/components/',
						src: [
							'angular/angular.min.js',
							'angular-animate/angular-animate.min.js',
							'angular-route/angular-route.min.js',
							'bootstrap/js/transition.js',
							'bootstrap/js/collapse.js',
							'jquery/dist/jquery.min.js',
							'modernizr/modernizr.js'
						],
						dest: 'bin/app_build/js/libs',
						flatten: true,
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'fonts/',
						src: [
							'**/*.*'
						],
						dest: 'bin/release/fonts',
						flatten: true,
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'images/',
						src: [
							'**/*.*'
						],
						dest: 'bin/release/images',
						filter: 'isFile'
					}
				]
			}
		},

		uglify: {
		    release: {
		        files: [
                    {
                        expand: true,
                        cwd: 'bin/app_build/js',
                        src: [
							'*.js',
							'features/**/*.js',
							'views/**/*.js',
							'libs/*.min.js',
							'libs/*.js'
						],
                        dest: 'bin/app_build/js',
                        ext: '.min.js'
                    }
		        ]
		    }
		},

		cssmin: {
			release: {
				files: [{
					expand: true,
					src: ['css/*.css', 'app/components/normalize.css/normalize.css'],
					dest: 'bin/app_build/css',
					flatten: true,
					ext: '.min.css'
				}]
			}
		},

		concat: {
		    options:{
                separator: ";"
		    },
		    libs:{
		        src: [
                    'bin/app_build/js/libs/jquery.min.js',
					'bin/app_build/js/libs/modernizr.min.js',
                    'bin/app_build/js/libs/bootstrap.min.js',
                    'bin/app_build/js/libs/angular.min.js',
                    'bin/app_build/js/libs/angular-route.min.js',
                    'bin/app_build/js/libs/angular-animate.min.js'
		        ],
                dest: 'bin/release/js/libs.min.js'
		    },
		    source: {
		        src: [
                    'bin/app_build/js/features/navigation/angular-touch-custom.min.js',
					'bin/app_build/js/app.min.js',
                    'bin/app_build/js/**/*Srvc.min.js',
                    'bin/app_build/js/**/*Directive.min.js',
                    'bin/app_build/js/**/*Ctrl.min.js'
		        ],
                dest: 'bin/release/js/source.min.js'
		    },
		    styles: {
		        options: {
		            separator: ''
		        },
		        src: [
                    'bin/app_build/css/normalize.min.css',
                    'bin/app_build/css/bootstrap.min.css',
                    'bin/app_build/css/about.min.css',
					'bin/app_build/css/brand.min.css',
					'bin/app_build/css/dress.min.css',
					'bin/app_build/css/familylook.min.css',
					'bin/app_build/css/main.min.css',
					'bin/app_build/css/media.min.css',
					'bin/app_build/css/sizeplus.min.css',
					'bin/app_build/css/question.min.css',
					'bin/app_build/css/questiondetails.min.css',
					'bin/app_build/css/dropzone.min.css'
		        ],
                dest: 'bin/release/css/styles.css'
		    }
		},

		htmlmin: {
			release: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'bin/release/html/navbar.html': 'app/source/features/navbar/navbar.html',
					'bin/release/html/about.html': 'app/source/views/about/about.html',
					'bin/release/html/brand.html': 'app/source/views/brand/brand.html',
					'bin/release/html/dress.html': 'app/source/views/services/dress.html',
					'bin/release/html/familylook.html': 'app/source/views/services/familylook.html',
					'bin/release/html/sizeplus.html': 'app/source/views/services/sizeplus.html',
					'bin/release/html/question.html': 'app/source/views/question/question.html',
					'bin/release/html/questiondetails.html': 'app/source/features/questiondetails/questiondetails.html',
					'bin/release/html/dropzone.html': 'app/source/features/questiondetails/dropzone.html',
					'bin/release/index.html': 'app/source/index_release.html'
				}
			}
		},

		karma: {
			unit: {
				options: {
					// point all tasks to karma config file
					configFile: 'test/karma.conf.js'
				},
				// run tests once instead of continuously
				singleRun: false
			}
		}
	});

	grunt.registerTask('debug', ['clean:debug', 'less:debug', 'copy:debug']);
	grunt.registerTask('release', ['clean:release', 'less:release', 'ngAnnotate', 'copy:release', 'uglify:release', 'cssmin:release', 'concat', 'htmlmin:release']);
	grunt.registerTask('test', ['debug', 'karma:unit']);
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-karma');
};