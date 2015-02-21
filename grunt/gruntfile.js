module.exports = function(grunt) {
	grunt.initConfig({
		clean: {
			options: { force: true },
			all: {
				src: ['../Web/App_Build/**/*.*']
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
                        cwd: '../Web/Application/Custom',
                        src: ['**/*.js'],
                        dest: '../Web/App_Build',
                        ext: '.js'
                    },
                    {
                        expand: true,
                        cwd: '../Web/Application/Libraries',
                        src: ['**/*.min.js'],
                        dest: '../Web/App_Build/Libraries',
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
                        cwd: '../Web/App_Build',
                        src: ['**/*.js'],
                        dest: '../Web/App_Build',
                        ext: '.min.js'
                    }
		        ]
		    }
		},

		concat: {
		    options: {
                separator: ';'
		    },
		    libs:{
		        src: [
                    '../Web/App_Build/Libraries/jQuery/*.min.js',
                    '../Web/App_Build/Libraries/Bootstrap/*.min.js',
                    '../Web/App_Build/Libraries/Angular/angular.min.js',
                    '../Web/App_Build/Libraries/Angular/angular-route.min.js',
                    '../Web/App_Build/Libraries/Angular/angular-touch.min.js',
                    '../Web/App_Build/Libraries/Angular/angular-animate.min.js'
		        ],
                dest: '../Web/App_Build/app_libs.js'
		    },
		    cust: {
		        src: [
                    '../Web/App_Build/app.min.js',
                    '../Web/App_Build/Common/*Srvc.min.js',
                    '../Web/App_Build/**/*Directive.min.js',
                    '../Web/App_Build/**/*Ctrl.min.js'
		        ],
                dest: '../Web/App_Build/app_build.js'
		    }
		}
	});
	
	grunt.registerTask('default', ['build']);
	grunt.registerTask('build', ['clean', 'ngAnnotate', 'uglify', 'concat']);
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
};