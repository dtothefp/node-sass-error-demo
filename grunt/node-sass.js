'use strict';

var path = require('path');
var sass = require('node-sass');
var eachAsync = require('each-async');
var glob = require('globby');

module.exports = function(grunt) {
  grunt.registerTask('node-sass', 'Compile Sass to CSS', function () {
    var done = this.async();
    var src = grunt.config.get('src'); // old assemble config
    var dest = grunt.config.get('dist'); // old assemble config
    var files = glob.sync(path.join(src, '*.scss'));

    eachAsync(files, function(file, i, next) {
      console.log(file);

      //sass.render({
        //file: file,
        //outFile: dest
      //}, function(err, res) {
        //console.log(err);

        //next();
      //});
      var outFile = path.join(dest, path.basename(src, '.scss') + '.css');
      console.log(outFile);
      sass.render({
        file: file,
        outFile: dest,
        precision: 10,
        includePaths: [
          path.join(process.cwd(), 'node_modules/css-smart-grid/sass')
        ]
      }, function (err, res) {
				if (err) {
					grunt.log.error(err.message + '\n  ' + 'Line ' + err.line + '  Column ' + err.column + '  ' + path.relative(process.cwd(), err.file) + '\n');
					grunt.warn('');
					next(err);
					return;
				}

        grunt.file.write(outFile, res.css);

				next();
			});

    }.bind(this), done);

  });
};

