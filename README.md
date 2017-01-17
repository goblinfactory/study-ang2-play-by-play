# study-ang2-play-by-play

Small spike project to test learning angular 2. It's a clone of the angular2 getting started project, with the `non-essential-files.txt` removed, and then manually updated while I followed a play by play, but using my own examples and code.

# random notes

These may or may not pan out to be anything. As I'm watching the play by play these are some differences. Noting them here in case something doesnt work as expected and this might have something to do with it.

- no `typings.json` file. Might affect `es6-shim` or `jasmine`.
- no `wallaby.js`

# notes for feedback to course writers * errors

1. running `$> npm start` from terminal window (` control + backtick`) in visual studio code, did not appear to do anything,huh! Possibly a prerequisite, or VScode shell thing. Ah, works from terminal, but not from VSCode shell window.
1. warning in Visual studio code, something about workspace typescript version below that of bundled, choose which you want to use. selected latest version (i.e. bundled and not workspace, huh.)
1. running `$> npm test` failed with error `File ... karma.conf.js` does not exist. (It's possible the extra files list contained this file in the beginning and was deleted?) Ok, going to try create my own karma file.
1. copying the default `app.component.spec.ts` from quickstart results in a non failing tests.
1. Had to start from scratch (and *not* delete the extra files) in order for `npm test` to work. Will go through intro to Jasmine and Karma seperately.
 1. ok, all's well with the world, restoring all the default `non-essential-files.txt` brought the tests back to life. My guess is Angular CLI or You is a better way to kick start an angular project?

# Nice features from a noobie

- automatic refresh when files are edited. Lite-server pretty smart! (live without press F5) (have not tested css, but imagine that's sorted! To test!)

## references

- [Angular 2 quick start](https://github.com/angular/quickstart)
 
 ```   
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q 
```

- [Play by play : angular 2 Quick start with John Papa and Ward Bell](https://app.pluralsight.com/library/courses/play-by-play-angular-2-quick-start-john-papa-ward-bell/table-of-contents)