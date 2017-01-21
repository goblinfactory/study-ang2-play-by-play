# anguar2 sandbox - quickstart1

Sandbox temporary project. Nothing to see here. (i.e. will be constantly changing while I'm going through the Angular play by play on Pluralsight.) Notes are mostly stuff I had to find out for myself, that are not in the play-by-play, i.e. this is my scratchpad.

## random notes

### hiding .js and .map files during development

1. install `peep` extension. (`@nwallace`) and configure hidden `.vscode\settings.json` as follows
 
 ```
{
  "typescript.check.workspaceVersion": false,
  "files.exclude": {
    "node_modules/": true,
    "dist/": true,
    "lib/": true,
    "app/*.js": true,
    "app/*.map":true
  }
}
 ```

1. reload vscode.
1. issue command (from command pallette) `peep none` or `peep all`

### note to self, I've moved to writing my notes in A5 handbook

Initially this was a lot more work, but I'm getting used to writing notes manually as I want to keep the book as a reference. (Decided to do this after seeing Ebru Cucen refer to some notes during a discussion and how the manual notes and mind maps were super helpful as a learning aid.) Huh, engage more of the senses.

#### installing html test reporter

- https://www.npmjs.com/package/protractor-jasmine2-html-reporter

1. `npm install protractor-jasmine2-html-reporter --save-dev`
1. update `protractor.config.js` (as per instructions in link above)


- https://app.pluralsight.com/player?course=play-by-play-angular-2-quick-start-john-papa-ward-bell&author=john-papa&name=play-by-play-angular-2-quick-start-john-papa-ward-bell-m4&clip=1&mode=live
- pausing at : Handling Http responses, Rx and Observables. 4m45s

