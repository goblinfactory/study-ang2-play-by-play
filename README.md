# study-ang2-play-by-play

Small spike project to test learning angular 2. It's a clone of the angular2 getting started project, with the `non-essential-files.txt` removed, and then manually updated while I followed a play by play, but using my own examples and code.

## random notes

These may or may not pan out to be anything. As I'm watching the play by play these are some differences. Noting them here in case something doesnt work as expected and this might have something to do with it.

- no `typings.json` file. Might affect `es6-shim` or `jasmine`.
- no `wallaby.js`

## notes on following step by step

1. running `$> npm start` from terminal window (` control + backtick`) in visual studio code, did not appear to do anything,huh! Possibly a prerequisite, or VScode shell thing. Ah, works from terminal, but not from VSCode shell window.
1. warning in Visual studio code, something about workspace typescript version below that of bundled, choose which you want to use. selected latest version (i.e. bundled and not workspace, huh.)
1. running `$> npm test` failed with error `File ... karma.conf.js` does not exist. (It's possible the extra files list contained this file in the beginning and was deleted?) Ok, going to try create my own karma file.
1. copying the default `app.component.spec.ts` from quickstart results in a non failing tests.
1. Had to start from scratch (and *not* delete the extra files) in order for `npm test` to work. Will go through intro to Jasmine and Karma seperately.
 1. ok, all's well with the world, restoring all the default `non-essential-files.txt` brought the tests back to life. My guess is Angular CLI or You is a better way to kick start an angular project?

### launching the out of box quick start app

1. In the pbp the Unit tests results are a nicely formatted html file `tests.html`, in `quickstart` the test results file is a texd file `protractor-results.txt`. **todo : find out how to configure protractor** to render results as html.

### Testing with Wallabee

1. `wallaby.js` missing, so could not *start* wallaby after installing extension and `cmd shift equals => start`
 1. installing 'wallaby.js' extension (as a noobie) was a disaster, after messing around and trying to fix few things, (writing a wallaby.js) config, I keep getting `cannot find variable:module` and [FAQ here](https://wallabyjs.com/docs/intro/troubleshooting.html) refers to the `env` `property` which is in the wallaby.js config file. Ok, just don't have time for  this. Wallabee looks excellent, but it's just too much too soon, so will come back when all the other bits and pieces are working. (manual testing without coverage will have to do for now.)
1. On my big screen (40") Karma kicks off the chrome test window from top to bottom, and overlaps a whole bunch of dev windows. This is quite distracting, will be good to google and find out how to configure the size of this window (for a bonus the location as well).
1. Wallabee is currently $100 for a named developer licence. Valid as of 24/1/2017. Does allow you to run with a 30 day trial licence. I've started this, and expect I'll need to ask for an extension whenever I get to reviewing it later.

### Running e2e End-to-end Testing

1. (!) `$> npm run e2e` ***fails*** with `make sure you have the latest version of node.js and npm installed`. Not sure if this relates to or is similar to the `Typescript` warning from earlier? huh!


## references

- [Angular 2 quick start](https://github.com/angular/quickstart)
 
 ```   
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q 
```

- [Play by play : angular 2 Quick start with John Papa and Ward Bell](https://app.pluralsight.com/library/courses/play-by-play-angular-2-quick-start-john-papa-ward-bell/table-of-contents)