module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        watch: {
            handlebars: {
                files: ['js/*.hbs'],
                tasks: ['handlebars:compile']
            },
            grunt: {
                files: ['Gruntfile.js']
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: 'HH',
                    processName: function(filePath) {
                        var pieces = filePath.split('/'),
                            lastPiece = pieces[pieces.length - 1],
                            tplKey = lastPiece.substring(0,lastPiece.indexOf('.hbs'));
                        return tplKey;
                    }
                },
                files: {
                    'js/template.js': 'js/notif.hbs'
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};