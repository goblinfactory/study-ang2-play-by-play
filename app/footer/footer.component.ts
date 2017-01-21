import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from '../company/company.service'

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    providers:[CompanyService]
})
export class FooterComponent implements OnInit {

    company : any
        
    constructor(private _companyService : CompanyService) { }

    ngOnInit() { 
        this.company = this._companyService.getCompany()
    }
}

