'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
      var YOUR_LOCALS = './config.json';
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({
          locals: JSON.parse($.fs.readFileSync(YOUR_LOCALS, 'utf-8')),
          pretty: true
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
