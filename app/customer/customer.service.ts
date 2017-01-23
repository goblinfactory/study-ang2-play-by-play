import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/Rx'
import { Observable } from 'rxjs/Rx'

const URL_CUSTOMER = 'app/customer/customers.json'

@Injectable()
export class CustomerService {
    constructor(private _http : Http) { }
    
    getCustomers() {
        console.log('get customers ()')
        //return Observable.throw("this is the detailed error message, or object!");
        return Observable.throw(JSON.stringify({ animal:"cat", size:10 }))

        // return this._http.get(URL_CUSTOMER)
        // .map((response:Response)=> response.json())
        // ._catch(this._fooErrorHandler);
    }

    _fooErrorHandler(err:any) {
        console.log(err) // log this somewhere and format the message well for devs
        return Observable.throw(err) // customise error for user
    }
}

