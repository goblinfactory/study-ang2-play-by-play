import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { CustomersComponent, CustomerComponent, CustomerService  } from '../customer/index'

@Component({
  moduleId:module.id,
  selector: 'app-dashboard',
  templateUrl:'dashboard.component.html',
  providers:[CustomerService ],
  styles:[`
  
    a { padding:5px; color:black; background-color:#FFF; cursor:pointer; border 1px solid white; border-bottom:1px solid #888; text-decoration:none; }
    a.active { background-color:#DDD; border:1px solid black; border-bottom:none; cursor:hand; }
    a:hover { background-color:#DDF; }
    a.active:hover { background-color:#DDD; }
    a:not(active) { background-color:#EEE; }
  `]
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
