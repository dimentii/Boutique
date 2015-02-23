module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		clean: {
			options: { force: true },
			all: {
				src: ['../Web/App_Build/**/*.*']
			}				
		},

		less: {
		    development: {
		        options: {
		            compress: true,
		        },
		        files: {
		            "../Web/App_Build/Styles/Bootstrap/bootstrap.min.css": "../Web/Content/Styles/Bootstrap/base.less",
		        }
		    }
		},

		ngAnnotate: {
		    options: {
		        singleQuotes: true,
		    },
		    all: {
		        files: [
                    {
                        expand: true,
                        cwd: '../Web/Application',
                        src: ['**/*.js'],
                        dest: '../Web/App_Build/Scripts/Application',
                        ext: '.js'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['*.min.js'],
                        dest: '../Web/App_Build/Scripts/Libraries/jQuery',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/js/',
                        src: ['transition.js', 'collapse.js'],
                        dest: '../Web/App_Build/Scripts/Libraries/Bootstrap',
                        ext: '.js'
                    },                    
                    {
                        expand: true,
                        cwd: 'bower_components/angular/',
                        src: ['*.min.js'],
                        dest: '../Web/App_Build/Scripts/Libraries/Angular',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/angular-route/',
                        src: ['*.min.js'],
                        dest: '../Web/App_Build/Scripts/Libraries/Angular',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/angular-animate/',
                        src: ['*.min.js'],
                        dest: '../Web/App_Build/Scripts/Libraries/Angular',
                        ext: '.min.js'
                    }
		        ]
		    }
		},

		uglify: {
		    all: {
		        files: [
                    {
                        expand: true,
                        cwd: '../Web/App_Build/Scripts',
                        src: ['**/*.js'],
                        dest: '../Web/App_Build/Scripts',
                        ext: '.min.js'
                    }
		        ]
		    }
		},

		cssmin: {
		    normalize: {
		        src: 'bower_components/normalize.css/normalize.css',
		        dest: '../Web/App_Build/Styles/Normalize/normalize.min.css'
		    },
		    about: {
		        src: '../Web/Content/Styles/about.css',
                dest: '../Web/App_Build/Styles/about.min.css'
		    },
		    brand: {
		        src: '../Web/Content/Styles/brand.css',
		        dest: '../Web/App_Build/Styles/brand.min.css'
		    },
		    dress: {
		        src: '../Web/Content/Styles/dress.css',
		        dest: '../Web/App_Build/Styles/dress.min.css'
		    },
		    familylook: {
		        src: '../Web/Content/Styles/familylook.css',
		        dest: '../Web/App_Build/Styles/familylook.min.css'
		    },
		    main: {
		        src: '../Web/Content/Styles/main.css',
		        dest: '../Web/App_Build/Styles/main.min.css'
		    },
		    media: {
		        src: '../Web/Content/Styles/media.css',
		        dest: '../Web/App_Build/Styles/media.min.css'
		    },
		    sizeplus: {
		        src: '../Web/Content/Styles/sizeplus.css',
		        dest: '../Web/App_Build/Styles/sizeplus.min.css'
		    }
		},

		concat: {
		    options:{
                separator: ";"
		    },
		    libs:{
		        src: [
                    '../Web/App_Build/Scripts/Libraries/jQuery/*.min.js',
                    '../Web/App_Build/Scripts/Libraries/Bootstrap/*.min.js',
                    '../Web/App_Build/Scripts/Libraries/Angular/angular.min.js',
                    '../Web/App_Build/Scripts/Libraries/Angular/angular-route.min.js',
                    '../Web/App_Build/Scripts/Application/Custom/angular-touch-custom.min.js',
                    '../Web/App_Build/Scripts/Libraries/Angular/angular-animate.min.js'
		        ],
                dest: '../Web/App_Build/app_libs.js'
		    },
		    cust: {
		        src: [
                    '../Web/App_Build/Scripts/Application/app.min.js',
                    '../Web/App_Build/Scripts/Application/Common/*Srvc.min.js',
                    '../Web/App_Build/Scripts/Application/**/*Directive.min.js',
                    '../Web/App_Build/Scripts/Application/**/*Ctrl.min.js'
		        ],
                dest: '../Web/App_Build/app_build.js'
		    },
		    styles: {
		        options: {
		            separator: '',
		        },
		        src: [
                    '../Web/App_Build/Styles/Normalize/*.min.css',
                    '../Web/App_Build/Styles/Bootstrap/*.min.css',
                    '../Web/App_Build/Styles/*.min.css'
		        ],
                dest: '../Web/App_Build/styles.css'
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