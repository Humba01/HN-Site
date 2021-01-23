module.exports = function(grunt) {
    
    grunt.initConfig({
        copy: {
            public: {
                expand: true,
                cwd: 'public',
                src: '**',
                dest: 'dist'
            },
            sgmp: {
                expand: true,
                cwd: 'HN-SGMP',
                src: '**',
                dest: 'dist'
            },
            unote: {
                expand: true,
                cwd: 'Humbanew-Unote-Beta',
                src: '**',
                dest: 'dist'
            }
        },

        clean: {
            dist: {
                src: 'dist'
            },

            xml: {
                src: 'dist/xml'
            },

            mp3: {
                src: 'dist/mp3'  
            },

            jasmine: {
                src: 'dist/jasmine'
            },

            html: {
                src: 'dist/html'
            },

            outros: {
                src: 'dist/remodelagem-subdivisoes.txt'
            },

            css: {
                src: [
                    'dist/css/pag-build', 
                    'dist/css/pag-heverdev', 
                    'dist/css/pag-inicial', 
                    'dist/css/pag-treatplay', 
                    'dist/css/pag-wiki', 
                    'dist/css/pag-worldteam', 
                    'dist/css/29eb.fonts.css',
                    'dist/css/6199.reset.css'
                ]
            },

            js: {
                src: [
                    'dist/js/background',
                    'dist/js/config',
                    'dist/js/UI'
                ]
            }
        },

        useminPrepare: {
            html: 'dist/**/*.html'
        },

        usemin: {
            html: 'dist/**/*.html'
        },

        rev: {
            options: {
              encoding: 'utf8',
              algorithm: 'md5',
              length: 4
            },

            js: {
                src: 'dist/**/*.js'
            },

            css: {
                src: 'dist/**/*.css'
            },

            html: {
                src: 'dist/**/*.html'
            }
        },

        connect: {
            serverDev: {
                options: {
                    port: '18000',
                    base: 'public',
                    open: true,
                    livereload: true
                }
            },
            serverProd: {
                options: {
                    port: '18100',
                    base: 'dist',
                    open: true,
                    livereload: true
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: 'last 500 versions'
            },
            your_target: {
                src: 'dist/css/**/*.css'
            },
        },

        jshint: {
            all: ['public/js/**/*.js', 'HN-SGMP/js/**/*.js', 'Humbanew-Unote-Beta/js/**/*.js']
        },

        imagemin: {    
            public: {
                expand: true,
                cwd: 'dist/img',
                src: '**/*.{png,jpg,gif}',
                dest: 'dist/img'
            }
        },

        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'dist/index.html': 'src/index.html',     // 'destination': 'source'
                'dist/contact.html': 'src/contact.html'
              }
            }
          }
    });


    grunt.registerTask('default', ['clean:dist', 'copy', 'autoprefixer', 'htmlmin', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'imagemin', 'rev', 'usemin', 'clean:xml', 'clean:mp3', 'clean:jasmine', 'clean:outros', 'clean:css', 'clean:js', 'clean:html']);
    grunt.registerTask('serverDev', ['connect:serverDev']);
    grunt.registerTask('serverProd', ['connect:serverProd']);

    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
}