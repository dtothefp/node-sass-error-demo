module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
    jitGrunt: {
      staticMappings: {
        'node-sass': './grunt/node-sass'
      }
    },
    init: true
  });

	grunt.registerTask('default', ['config:dev', 'node-sass']);
};
