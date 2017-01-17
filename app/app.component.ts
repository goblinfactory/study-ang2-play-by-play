import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
})

// [] means property binding  - Component (C) to Dom (D)
// () means event binding     - Dom to Component.

export class AppComponent  { 

  name = "Alan"
  title = 'Angular World'
  size = 20
  color = 'blue'

  changeSuitColor() {
    this.color = (this.color === 'red') ? 'blue' : 'red';
  }

}


