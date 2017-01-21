import { Component } from '@angular/core';
import { CustomerService } from './customer/customer.service'

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl:'app.component.html',
  providers:[CustomerService]
})
export class AppComponent  { 

  footer = { company:"TechRus", year:2017 }
  title = `Customer App`
  name = `Alan`
  color = `red`

  //constructor(private _customerServicer : CustomerService ){ }

  changeSuiteColor() {
    this.color = (this.color=='red') ? 'blue' : 'red';
  }

}
