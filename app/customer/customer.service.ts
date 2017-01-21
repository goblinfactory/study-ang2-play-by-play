import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'


const URL_CUSTOMER = 'app/customer.json'

@Injectable()
export class CustomerService {

    constructor(private _http : Http) { }
    requestCnt = 0
    

    getCustomers() {
        console.log('get customers ()')
        this.requestCnt ++
        return this._http.get(URL_CUSTOMER)
        .map((response:Response)=> response.json());
    }
    
}

