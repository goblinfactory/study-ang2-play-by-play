import { Component, Input, OnInit } from '@angular/core'; 

@Component({
    moduleId: module.id, // is this so that we can remove our dependancy on the folder location? huh??
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {

    @Input() 
    customer : { id:number, name:string }

    constructor() {
        
     }

    ngOnInit() { }
}

