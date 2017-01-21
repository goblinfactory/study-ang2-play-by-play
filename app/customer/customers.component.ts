import { Component, OnInit } from '@angular/core'
import { CustomerService } from './customer.service'

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers:[CustomerService] 
    
})
export class CustomersComponent implements OnInit {
    
    customers : any[]
    
    // typescript, you beauty! what a wicked shortcut, private ... and viola, it's there!!!! boom, baam!!
    constructor(private _customerService : CustomerService) { } 

    ngOnInit() { 
      this.customers = this._customerService.getCustomers()
    }
}

