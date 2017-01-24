import { Component,Input, OnInit, Injectable } from '@angular/core';
import { Hero,HeroComponent } from './hero.component'

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html'
})


@Injectable()
export class HeroDetailComponent implements OnInit {

    @Input()
    hero:Hero

    constructor() { }

    ngOnInit() { }

}