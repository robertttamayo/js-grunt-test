module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // modules
        rollup: {
            options: {},
            files: {
                dest: 'assets/js/rollup/bundle.js',
                src: 'assets/js/app.js'
            }
        }, 
        // transpile into es5 javascript
        babel: {
            options: {
                sourceMap: false,
                presets: [
                    [
                        "env",
                        {
                            "targets": {
                                "browsers": [
                                    "last 2 versions"
                                ]
                            },
                            "forceAllTransforms": true // this line turns "let" into "var", etc
                        }
                    ]
                ]
            },
            dist: {
                files: {
                    'assets/js/babel/scripts.js': 'assets/js/rollup/bundle.js',
                }
            }
            
        },
        // minify js files
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/js/min/scripts.min.js': 'assets/js/babel/scripts.js'
                }
            }
        },
        // listen for changes
        watch: {
            js: {
                files: [
                    'assets/js/*.js',
                    'assets/js/lib/*.js'
                ],
                tasks: [
                    'rollup', 
                    'babel',
                    'uglify'
                ]
            },
            all: {
                files: [
                    'Gruntfile.js'
                ],
                tasks: [
                    'rollup',
                    'babel',
                    'uglify'
                ]
            }
        },
    });

    grunt.loadNpmTasks('grunt-rollup');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['rollup', 'babel', 'uglify', 'watch']);
};
