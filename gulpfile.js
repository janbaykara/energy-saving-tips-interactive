// Dependencies
var gulp = require('gulp')
  , gulpLoadPlugins = require('gulp-load-plugins')
  , mainBowerFiles = require('main-bower-files');

// Autoload Gulp tasks from package.json
var plugins = gulpLoadPlugins();

// Paths
var dirs = {
  dev: {
    config:  ['bower.json','package.json'],
    img:     ['assets/img/**/*.jpg',
              'assets/img/**/*.jpeg',
              'assets/img/**/*.gif',
              'assets/img/**/*.png'],
    svg:     ['assets/img/**/*.svg'],
    js:      ['assets/js/*.js'],
    json:    ['assets/data/*.json'],
    sass:    ['assets/sass/*.scss'],
    fonts:   ['assets/fonts/*'],
    html:    ['assets/html/*'],
    misc:    ['assets/misc/**/*']
  },
  prod: {
    images:   'public/images',
    scripts:  'public/scripts',
    styles:   'public/styles',
    views:    'public/views',
    misc:     'public/misc'
  }
}

gulp.task('install', function () {
  return gulp.src(dirs.dev.config)
  .pipe(plugins.install());
});

gulp.task('misc', function() {
  gulp.src(dirs.dev.misc)
  .pipe(gulp.dest(dirs.prod.misc));
});

// ----------------------------------------------------------------
// Styles

  gulp.task('css', function () {
    gulp.src(dirs.dev.sass)
    .pipe(plugins.sass({
        errLogToConsole: true
    }))
    .pipe(plugins.autoprefixer({browsers: ['> 0.1%']}))
    .pipe(plugins.size({showFiles: true}))
    .pipe(plugins.minifyCss())
    // .pipe(plugins.csslint({
    //     'compatible-vendor-prefixes': false,
    //     'box-sizing': false,
    //     'important': false,
    //     'known-properties': false
    // }))
    // .pipe(plugins.csslint.reporter())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.size({showFiles: true}))
    .pipe(gulp.dest(dirs.prod.styles))
  });

  gulp.task('fonts', function() {
    gulp.src(dirs.dev.fonts)
    .pipe(gulp.dest(dirs.prod.styles));
  });

// ----------------------------------------------------------------
// Javascript

  // Vendor JS
  gulp.task('libs', function() {
    gulp.src(mainBowerFiles(), { base: 'vendor' })
    .pipe(plugins.concat('libs.min.js'))
    .pipe(plugins.size({showFiles: true}))
    .pipe(plugins.uglify({mangle: false}))
    .pipe(plugins.size({showFiles: true}))
    .pipe(gulp.dest(dirs.prod.scripts));
  });

  // Project JS
  gulp.task('js', function() {
    gulp.src(dirs.dev.js)
    .pipe(plugins.concat('app.min.js'))
    .pipe(plugins.size({showFiles: true}))
    .pipe(plugins.uglify({mangle: false}))
    .pipe(plugins.size({showFiles: true}))
    .pipe(gulp.dest(dirs.prod.scripts));
  });

  // Datafiles
  gulp.task('json', function() {
    gulp.src(dirs.dev.json)
    .pipe(gulp.dest(dirs.prod.scripts));
  });

// ----------------------------------------------------------------
// Views

  gulp.task('html', function() {
    gulp.src(dirs.dev.html)
    .pipe(gulp.dest(dirs.prod.views));
  });

// ----------------------------------------------------------------
// Images

    gulp.task('rasters', function() {
      gulp.src(dirs.dev.img)
      .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
      .pipe(gulp.dest(dirs.prod.images));
    });

    gulp.task('vectors', function() {
      gulp.src(dirs.dev.svg)
      // .pipe(plugins.svgmin())
      .pipe(gulp.dest(dirs.prod.images));
    });

// ----------------------------------------------------------------
// Tasks

gulp.task('watch', function() {
  gulp.watch(dirs.dev.js,     ['js']);
  gulp.watch(dirs.dev.libs,   ['libs']);
  gulp.watch(dirs.dev.json,   ['json']);
  //
  gulp.watch(dirs.dev.sass,   ['css']);
  //
  gulp.watch(dirs.dev.fonts,  ['fonts']);
  gulp.watch(dirs.dev.img,    ['rasters']);
  gulp.watch(dirs.dev.svg,    ['vectors']);
  gulp.watch(dirs.dev.misc,   ['misc']);
  //
  gulp.watch(dirs.dev.html,   ['html']);
});

gulp.task('build', ['rasters', 'vectors', 'css', 'fonts', 'js', 'libs', 'json', 'html', 'misc']);
gulp.task('init', ['install', 'build']);
gulp.task('default', ['build', 'watch']);
