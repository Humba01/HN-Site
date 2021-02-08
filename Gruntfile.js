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
                    'dist/css/6199.reset.css',
                    'dist/css/configs',
                    'dist/css/sgmp'
                ]
            },

            js: {
                src: [
                    'dist/js/background',
                    'dist/js/config',
                    'dist/js/UI'
                ]
            },

            sgmp_html: {
                src: [
                    'dist/sgmp.html'
                ]
            }
        },

        useminPrepare: {
            html: 'dist/**/*.html'
        },

        usemin: {
            html: 'dist/**/*.html',
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
        },

        autoprefixer: {
            options: {
                browsers: 'last 500 versions'
            },
            your_target: {
                src: 'dist/**/*.css'
            },
        },

        jshint: {
            all: ['public/js/**/*.js', 'HN-SGMP/js/**/*.js']
        },

        uglify: {
            my_target: {
                options: {
                    sourceMap: false
                }
            }
        },

        concat: {

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
                'dist/default.html': 'dist/default.html',     // 'destination': 'source'
                'dist/build.html': 'dist/build.html',
                'dist/sgmp/sgmp.html': 'dist/sgmp.html'
              }
            }
          }
    });


    grunt.registerTask('default', ['clean:dist', 'copy', 'autoprefixer', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'imagemin', 'rev', 'usemin', 'clean:xml', 'clean:mp3', 'clean:jasmine', 'clean:outros', 'clean:css', 'clean:js', 'clean:html', 'html_minificado_corretamente']);
    grunt.registerTask('html_minificado_corretamente', ['htmlmin', 'clean:sgmp_html']);
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