import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    getCustomers() {
    
    return [
        {id:1, name:'Alan'},
        {id:2, name:'Ward'},
        {id:3, name:'Cathy'},
        {id:4, name:'Gary'},
        {id:5, name:'Kevin'},
    ]

    }


    constructor() { }
}

