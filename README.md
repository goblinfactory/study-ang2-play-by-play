# study-ang2-play-by-play

Small spike project to test learning angular 2. It's a clone of the angular2 getting started project, with the `non-essential-files.txt` removed, and then manually updated while I followed a play by play, but using my own examples and code.

## references

- [Angular 2 quick start](https://github.com/angular/quickstart)
    
    for /f %i in (non-essential-files.txt) do del %i /F /S /Q
    rd .git /s /q
	rd e2e /s /q 
	
- [Play by play : angular 2 Quick start with John Papa and Ward Bell](https://app.pluralsight.com/library/courses/play-by-play-angular-2-quick-start-john-papa-ward-bell/table-of-contents)