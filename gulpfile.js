const gulp = require('gulp');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mediaquery = require('postcss-combine-media-query');
const cssnano = require('cssnano');
const htmlMinify = require('html-minifier');

function serve() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
}

function html() {
  const options = {
	  removeComments: true,
	  removeRedundantAttributes: true,
	  removeScriptTypeAttributes: true,
	  removeStyleLinkTypeAttributes: true,
	  sortClassName: true,
	  useShortDoctype: true,
	  collapseWhitespace: true,
		minifyCSS: true,
		keepClosingSlash: true
	};
  return gulp.src('src/**/*.html')
        .pipe(plumber())
        .on('data', function(file) {
		      const buferFile = Buffer.from(htmlMinify.minify(file.contents.toString(), options))
		      return file.contents = buferFile
		    })
				.pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function css() {
  const plugins = [
      autoprefixer(),
      mediaquery(),
      cssnano()
  ];
  return gulp.src('src/**/*.css')
        .pipe(plumber())
        .pipe(postcss(plugins))
				.pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function js() {
  return gulp.src('src/**/*js')
        .pipe(plumber())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function images() {
  return gulp.src('src/**/*.{jpg,png,svg,gif,ico,webp,avif}')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream: true}));
}

function fonts() {
  return gulp.src('src/**/*.{woff2,woff,ttf}')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream: true}));
}

function video() {
  return gulp.src('src/**/*.{mov,mp4}')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream: true}));
}

function clean() {
  return del('dist');
}

function watchFiles() {
  gulp.watch(['src/**/*.html'], html);
  gulp.watch(['src/**/*.css'], css);
  gulp.watch(['src/**/*.js'], js);
  gulp.watch(['src/**/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
  gulp.watch(['src/**/*.{woff2,woff,ttf}'], fonts);
  gulp.watch(['src/**/*.{mov,mp4}'], video);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts, video));
const watchapp = gulp.parallel(build, watchFiles, serve);

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.video = video;
exports.clean = clean;

exports.build = build;
exports.watchapp = watchapp;
exports.default = watchapp;