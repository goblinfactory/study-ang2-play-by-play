import { Component, OnInit } from '@angular/core';

export class Hero {
    id:number
    name:string
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
    moduleId: module.id,
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit {

    heroes = HEROES;


    title = 'Tour of Heroes';

    index = 0

    hero : Hero;

    constructor() { }

    // when to use onInit? 
    // everywhere you would use constructor, so that we
    // can control the lifecycle, e.g. for testing

    ngOnInit() { }

    select(index:number) {
        console.log(`selected index :index`)
        // locking ? 
        this.index = index
        this.hero = HEROES.find(h=> h.id==index)
        console.log(this.hero)
    }

    close() {
        this.hero = null
    }
}
