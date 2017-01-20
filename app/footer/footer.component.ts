import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
    
    @Input()
    footer : { year:number, company:string }
    
    constructor() { }

    ngOnInit() { }
}

