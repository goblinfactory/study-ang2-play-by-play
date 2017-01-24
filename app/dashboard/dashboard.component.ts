import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { CustomersComponent, CustomerComponent, CustomerService  } from '../customer/index'

@Component({
  moduleId:module.id,
  selector: 'app-dashboard',
  templateUrl:'dashboard.component.html',
  providers:[CustomerService ]
})
export class DashboardComponent  { 

  title = `Customer App`
  name = `Alan`
  color = `red`

  //constructor(private _customerServicer : CustomerService ){ }

  changeSuiteColor() {
    this.color = (this.color=='red') ? 'blue' : 'red';
  }

}
