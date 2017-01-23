import { Component, OnInit } from '@angular/core'
import { CustomerService } from './customer.service'
import { Observable } from 'rxjs/Rx'

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers:[CustomerService] 
    
})
export class CustomersComponent implements OnInit {
    
    customers : Observable<any[]>
    
    // typescript, you beauty! what a wicked shortcut, private ... and viola, it's there!!!! boom, baam!!
    constructor(private _customerService : CustomerService) { } 

    ngOnInit() { 
      this.customers = this._customerService.getCustomers()
        .catch((err) => {
            console.log("api error")
            console.log(err)
            // code below will swollow the error
            return Observable.from(
                [
                            [
                                {"id":0, "name":"Service error"},
                                {"id":0, "name": err.toString() },

                            ]
                ]
            )
        })
    }
}

