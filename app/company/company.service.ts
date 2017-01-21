import { Injectable } from '@angular/core';

@Injectable()
export class CompanyService {

    getCompany() : { name:string, year:number, cntCustomers:number } {
        return {
            name:"acme Ltd",
            year:2017,
            cntCustomers:5
        }
    }

    constructor() { }
}

