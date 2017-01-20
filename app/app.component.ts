import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component'
import { FooterComponent } from './footer/footer.component'

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html'
})
export class AppComponent  { 

  footer = { company:"TechIsROurBusiness", year:2017 }
  title = `Customer App`
  name = `Alan`
  color = `red`
  customers = [
    {id:1, name:'Alan'},
    {id:2, name:'Ward'},
    {id:3, name:'Cathy'},
    {id:4, name:'Gary'},
    {id:5, name:'Kevin'},
  ]

  changeSuiteColor() {
    this.color = (this.color=='red') ? 'blue' : 'red';
  }

}
