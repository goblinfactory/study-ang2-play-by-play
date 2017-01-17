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

1. `wallaby.js` missing, so could not start wallaby after installing extension and `cmd shift equals => start`
 1. installing 'wallaby.js' extension (as a noobie) was a disaster, after messing around and trying to fix few things, (writing a wallaby.js) config, I keep getting `cannot find variable:module` and [FAQ here](https://wallabyjs.com/docs/intro/troubleshooting.html) refers to the `env` `property` which is in the wallaby.js config file. Ok, just don't have time for  this. Wallabee looks excellent, but it's just too much too soon, so will come back when all the other bits and pieces are working. (manual testing without coverage will have to do for now.)
1. On my big screen (40") Karma kicks off the chrome test window from top to bottom, and overlaps a whole bunch of dev windows. This is quite distracting, will be good to google and find out how to configure the size of this window (for a bonus the location as well).
1. Wallabee is currently $100 for a named developer licence. Valid as of 24/1/2017. Does allow you to run with a 30 day trial licence. I've started this, and expect I'll need to ask for an extension whenever I get to reviewing it later.

### Running e2e End-to-end Testing

1. **(!)** `$> npm run e2e` ***fails*** with `make sure you have the latest version of node.js and npm installed`. Huh!
 1. I've definately run `npm run pree2e` and that ran ok, but the above just dies. It does run the tests first, and seems to only die when it gets to rendering the output, maybe this explains the text file? Perhaps the text file is parsed and used as a template to generate the html file, then deleted? Log files would be really helpful, but nadda from what I can see.
 1. Changing the `e2e/app.e2e-spec.ts` to make the test pass, appears to cause the error described above to go away, and at the very least we can temporarily use this as a crude test of passing. **Darn rubbish though, and will have to be fixed!** Might be a clue to the cause obviously.

### Getting started with components and data binding

1. using `systemsj` as the **module loader**.
1. Hmm, will have to come back to this, what's changed in the bootstrap sequence and `main.ts`.
1. Aaaargh, WTF, what just happened? why is this file so screwed up? Oh! Ah,... accidentally clicked the `js` file instead of the `ts` file. Need to watch out for that. 
1. No longer import from the component, default is to now import via the module? okay then.
 1. updated sequence, is cmd-click on `AppModule` then in the module file, cmd-click on `AppComponent` in the bootstrap line.
1. Accidentally hit 'save' with `<button (click)="">` without defining the event handler, and Karma and everything kinda vomited all over everything. The error message was less than useless, huh! `Failed : Uncaught (in promise) TypeError: Cannot set property "stack" of undefined.' Wow, that's just super unfriendly, well, that really just has absolutely no help tracking down the cause. I can see 1) here be dragons, and 2) make sure you're doing TDD, 3) run your tests often, and all the time, ..get into `Wallaby`, and lastly `GIT GIT GIT!` commit-in regularly and often after each passing test. 

## references

- [Angular 2 quick start](https://github.com/angular/quickstart)
 
 ```   
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q 
```

- [Play by play : angular 2 Quick start with John Papa and Ward Bell](https://app.pluralsight.com/library/courses/play-by-play-angular-2-quick-start-john-papa-ward-bell/table-of-contents)