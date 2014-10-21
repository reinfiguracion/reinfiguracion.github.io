path = require('path');
module.exports = function(grunt) {
  // configure project
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config : "config.rb",
          sassDir: 'app/css',
          outputStyle: 'expanded', // nested, expanded, compact, compressed.
          noLineComments: false,
          environment: "production", // or production
          cssDir: 'assets/css',
          imagesDir: 'assets/images',
          watch: false
        }
      }
    },
    prettify: {
      options: {
        indent: 1,
        indent_char: "  ",
        condense: true,
        brace_style: "expand",
        padcomments: true,
        indent_scripts: 'separate',
        preserve_newlines: true,
        unformatted: [
          "pre", "a", "span"
        ]
      },
      all: {
          expand: true,
          cwd: '',
          ext: '.html',
          src: ['*.html'],
          dest: ''
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'app',
          src: ['**/!(_)*.jade'],
          ext: '.html'
        }]
      }
    },
    watch: {
      options: {
        livereload: true,
        nospawn: true
      },
      css: {
        files: ['app/css/**/*'],
        tasks: ['compass']
      },
      js: {
        files: ['app/js/**/*.js'],
        tasks: ['compass']
      },
      templates: {
        files: ["app/*.jade"],
        tasks: ['jade', 'prettify'],
        options: {
          nospawn: true
        }
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,
          base: './',
          port: 9000
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-newer');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'jade', 'connect:server', 'watch']);
  grunt.registerTask('html', ['jade']);

};