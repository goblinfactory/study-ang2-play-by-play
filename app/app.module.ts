import { NgModule }       from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { FormsModule }    from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent }  from './app.component'


import  { CustomerComponent, CustomersComponent }  from './customer/index'
import { HeroComponent } from './hero/hero.component'
import { HeroDetailComponent } from './hero/hero-detail.component'
import { FooterComponent } from './footer/footer.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HeroComponent, HeroDetailComponent, CustomerComponent, FooterComponent, CustomersComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
