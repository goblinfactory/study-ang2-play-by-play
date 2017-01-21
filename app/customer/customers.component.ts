import { Component, OnInit } from '@angular/core'
import { CustomerService } from './customer.service'

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers:[CustomerService] // by specifying providers here, I am saying I want my own unique instance!
})
export class CustomersComponent implements OnInit {
    
    customers : any[]

    constructor(private _customerService : CustomerService) { } // typescript, you beauty! what a wicked shortcut, private ... and viola, it's there!!!! boom, baam!!

    ngOnInit() { 
      this.customers = this._customerService.getCustomers()
    }
}

