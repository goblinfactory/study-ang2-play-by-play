import { Component } from '@angular/core';

import { CustomersComponent, CustomerComponent, CustomerService  } from './customer/index'

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl:'app.component.html',
  providers:[CustomerService ]
})
export class AppComponent  { 

  title = `Customer App`
  name = `Alan`
  color = `red`

  //constructor(private _customerServicer : CustomerService ){ }

  changeSuiteColor() {
    this.color = (this.color=='red') ? 'blue' : 'red';
  }

}
