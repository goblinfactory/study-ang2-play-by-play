import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/Rx'

const URL_CUSTOMER = 'app/customer/customers.json'

@Injectable()
export class CustomerService {
    constructor(private _http : Http) { }
    
    getCustomers() {
        console.log('get customers ()')
        return this._http.get(URL_CUSTOMER)
        .map((response:Response)=> response.json());
    }
}

