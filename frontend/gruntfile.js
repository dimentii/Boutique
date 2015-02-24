module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		clean: {
			options: { force: true },
			all: {
				src: ['app_build/**/*.*', 'dist/**/*.*']
			}				
		},

		less: {
		    development: {
		        options: {
		            compress: true
		        },
		        files: {
		            "app_build/css/bootstrap/bootstrap.min.css": "css/bootstrap/base.less"
		        }
		    }
		},

		ngAnnotate: {
		    options: {
		        singleQuotes: true
		    },
		    all: {
		        files: [
                    {
                        expand: true,
                        cwd: 'app',
                        src: ['*.js'],
                        dest: 'app_build/js',
                        ext: '.js'
                    },
					{
						expand: true,
						cwd: 'app/brand',
						src: ['**/*.js'],
						dest: 'app_build/js/brand',
						ext: '.js'
					},
					{
						expand: true,
						cwd: 'app/common',
						src: ['**/*.js'],
						dest: 'app_build/js/common',
						ext: '.js'
					},
					{
						expand: true,
						cwd: 'app/custom',
						src: ['**/*.js'],
						dest: 'app_build/js/custom',
						ext: '.js'
					},
					{
						expand: true,
						cwd: 'app/main',
						src: ['**/*.js'],
						dest: 'app_build/js/main',
						ext: '.js'
					},
					{
						expand: true,
						cwd: 'app/services',
						src: ['**/*.js'],
						dest: 'app_build/js/services',
						ext: '.js'
					},
					{
						expand: true,
						cwd: 'app/bower_components',
						src: ['angular*/*.js'],
						dest: 'app_build/js/bower_components/angular',
						ext: '.js'
					},
					{
						expand: true,
						cwd: 'app/bower_components/bootstrap/dist/js',
						src: ['*.js'],
						dest: 'app_build/js/bower_components/bootstrap',
						ext: '.js'
					},
					{
						expand: true,
						cwd: 'app/bower_components/jquery/dist',
						src: ['**/*.js'],
						dest: 'app_build/js/bower_components/jquery',
						ext: '.js'
					}
		        ]
		    }
		},

		uglify: {
		    all: {
		        files: [
                    {
                        expand: true,
                        cwd: 'app_build/js',
                        src: ['**/*.js'],
                        dest: 'app_build/js',
                        ext: '.min.js'
                    }
		        ]
		    }
		},

		cssmin: {
		    normalize: {
		        src: 'app/bower_components/normalize.css/normalize.css',
		        dest: 'app_build/css/normalize/normalize.min.css'
		    },
		    about: {
		        src: 'css/about.css',
                dest: 'app_build/css/about.min.css'
		    },
		    brand: {
		        src: 'css/brand.css',
		        dest: 'app_build/css/brand.min.css'
		    },
		    dress: {
		        src: 'css/dress.css',
		        dest: 'app_build/css/dress.min.css'
		    },
		    familylook: {
		        src: 'css/familylook.css',
		        dest: 'app_build/css/familylook.min.css'
		    },
		    main: {
		        src: 'css/main.css',
		        dest: 'app_build/css/main.min.css'
		    },
		    media: {
		        src: 'css/media.css',
		        dest: 'app_build/css/media.min.css'
		    },
		    sizeplus: {
		        src: 'css/sizeplus.css',
		        dest: 'app_build/css/sizeplus.min.css'
		    }
		},

		concat: {
		    options:{
                separator: ";"
		    },
		    libs:{
		        src: [
                    'app_build/js/bower_components/jquery/*.min.js',
                    'app_build/js/bower_components/bootstrap/*.min.js',
                    'app_build/js/bower_components/angular/angular.min.js',
                    'app_build/js/bower_components/angular/angular-route.min.js',
                    'app_build/js/app/custom/angular-touch-custom.min.js',
                    'app_build/js/bower_components/angular/angular-animate.min.js'
		        ],
                dest: 'dist/app_libs.js'
		    },
		    cust: {
		        src: [
                    'app_build/js/app/app.min.js',
                    'app_build/js/app/**/*Srvc.min.js',
                    'app_build/js/app/**/*Directive.min.js',
                    'app_build/js/app/**/*Ctrl.min.js'
		        ],
                dest: 'dist/app_build.js'
		    },
		    styles: {
		        options: {
		            separator: ''
		        },
		        src: [
                    'app_build/css/normalize/*.min.css',
                    'app_build/css/bootstrap/*.min.css',
                    'app_build/css/*.min.css'
		        ],
                dest: 'dist/styles.css'
		    }
		}
	});
	
	grunt.registerTask('default', ['build']);
	grunt.registerTask('build', ['clean', 'less', 'ngAnnotate', 'uglify', 'cssmin', 'concat']);
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-css');
};