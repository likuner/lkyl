import gulp from 'gulp'
import concat from 'gulp-concat'
import { deleteAsync } from 'del'

const tsTask = () => {
  return gulp
    .src('./dist/types/**/*.d.ts')
    .pipe(concat('index.d.ts'))
    .pipe(gulp.dest('./dist/'))
}

const delTask = () => {
  return deleteAsync(['./dist/types'])
}

gulp.task('default', gulp.series(
  tsTask,
  delTask
))