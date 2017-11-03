var gulp = require('gulp');

gulp.task('hello', function(){
	console.log('Hello!');
});

var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function(){
	var spriteData = gulp.src(['./src/img/icons/*.*']) //путь, откуда берутся катринки
	.pipe(spritesmith({
		imgName: 'sprite.png',
		cssName:'_sprite.scss',
		imgPath:'../img/sprite.png',
		cssFormat: 'scss',
		padding: 16
	}));
	var imgStream = spriteData.img.pipe(gulp.dest('app/img/')); // куда заливается sprite
	var cssStream = spriteData.css.pipe(gulp.dest('src/scss/components/')); //куда заливается scss
	return (imgStream, cssStream);
});
