import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html'
})
export class AppComponent  { 
  title = `Customer App`
  name = `Alan`
  color = `red`

  changeSuiteColor() {
    this.color = (this.color=='red') ? 'blue' : 'red';
  }

}
