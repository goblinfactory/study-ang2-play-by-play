import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
})

export class AppComponent  { 

  name = "Alan"
  title = 'Angular World'
  size = 20
  color = 'blue'

  changeSuitColor() {
    this.color = (this.color === 'red') ? 'blue' : 'red';
  }

}


