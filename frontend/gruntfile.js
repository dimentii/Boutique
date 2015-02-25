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
		    all: {
		        files: [
                    {
                        expand: true,
                        cwd: 'app',
                        src: ['*.js'],
                        dest: 'bin/app_build/js',
                        ext: '.js'
                    },
					{
						expand: true,
						cwd: 'app/views',
						src: ['**/*.js'],
						dest: 'bin/app_build/js/views',
						ext: '.js'
					},
					{
						expand: true,
						cwd: 'app/source',
						src: ['**/*.js'],
						dest: 'bin/app_build/js/source',
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
							'jquery/dist/jquery.js'
						],
						dest: 'bin/debug/js/libs',
						flatten: true,
						filter: 'isFile'
					},
					{
						expand: true,
						cwd: 'app/',
						src: [
							'app.js',
							'source/**/*.js',
							'views/**/*.js',
						],
						dest: 'bin/debug/js',
						flatten: true,
						filter: 'isFile'
					},
					{
						expand: true,
						src: [
							'css/*.css',
							'app/components/normalize.css/normalize.css',
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
							'jquery/dist/jquery.min.js'
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
                        src: ['*.js', 'source/**/*.js', 'views/**/*.js', 'libs/transition.js', 'libs/collapse.js'],
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
                    'bin/app_build/js/libs/bootstrap.min.js',
                    'bin/app_build/js/libs/angular.min.js',
                    'bin/app_build/js/libs/angular-route.min.js',
                    'bin/app_build/js/libs/angular-animate.min.js'
		        ],
                dest: 'bin/release/js/app_libs.min.js'
		    },
		    source: {
		        src: [
                    'bin/app_build/js/source/navigation/angular-touch-custom.min.js',
					'bin/app_build/js/app.min.js',
                    'bin/app_build/js/**/*Srvc.min.js',
                    'bin/app_build/js/**/*Directive.min.js',
                    'bin/app_build/js/**/*Ctrl.min.js'
		        ],
                dest: 'bin/release/js/app_build.min.js'
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
					'bin/app_build/css/sizeplus.min.css'
		        ],
                dest: 'bin/release/css/styles.css'
		    }
		},

		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			files: {
				'bin/release/html/navbar.html': 'app/source/navbar/navbar.html',
				'bin/release/html/about.html': 'app/views/about/about.html',
				'bin/release/html/brand.html': 'app/views/brand/brand.html',
				'bin/release/html/dress.html': 'app/views/services/dress.html',
				'bin/release/html/familylook.html': 'app/views/services/familylook.html',
				'bin/release/html/sizeplus.html': 'app/views/services/sizeplus.html',
				'bin/release/index.html': 'app/index/html'
			}
		}
	});

	grunt.registerTask('debug', ['clean:debug', 'less:debug', 'copy:debug']);
	grunt.registerTask('release', ['clean:release', 'less:release', 'ngAnnotate', 'copy:release', 'uglify:release', 'cssmin:release', 'concat'])
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
};