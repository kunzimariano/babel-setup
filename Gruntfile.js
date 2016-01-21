module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        babelrc: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.js'],
          dest: 'lib',
          ext: '.js'
        }]
      },
    },
    watch: {
      babel: {
        files: ['src/*.js'],
        tasks: ['babel']
      }
    }

  });

  grunt.registerTask('default', ['babel']);

  grunt.loadNpmTasks('grunt-contrib-watch');
};