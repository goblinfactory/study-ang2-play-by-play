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
    customersFromSubscribe : any[]
    customers : any[]
    customersPromise : Promise<any[]>
    customersRx : Observable<any[]>
    
    // typescript, you beauty! what a wicked shortcut, private ... and viola, it's there!!!! boom, baam!!
    constructor(private _customerService : CustomerService) { } 

    ngOnInit() { 
        this.customersPromise = this.GetCustomersPromise()
        this.customersRx = this.getCustomersRx();
        this.GetCustomersPromise().then(c=> this.customers = c);
        this.getCustomersFromObservableAsArray();
    }

    getCustomersFromObservableAsArray() {
        this._customerService.getCustomersRx()
            .subscribe( 
            (c)=> this.customersFromSubscribe = c,
            (err) => {
                console.log(err)
                return [ { id:0, name:"rx bish bosh problems, so no data now, thank you!"}]
             })
    }

    getCustomersRx(){
        let customers:Observable<any> = this._customerService.getCustomersRx()
            .catch((err) => {
                console.log("api error")
                console.log(err)
                // code below will swollow the error
                return Observable.from([
                                [
                                    {"id":0, "name":"Service error"},
                                    {"id":0, "name": err.toString() },

                                ]
                ])
            });
        return customers;
    }

    GetCustomersPromise() {
        let customers:Promise<any> = this._customerService.getCustomersPromise()
            .catch((err) => {
                console.log(err)
            });
        return customers;

    }

}

