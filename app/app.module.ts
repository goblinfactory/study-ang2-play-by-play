import { NgModule }       from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { FormsModule }    from '@angular/forms'
import { HttpModule } from '@angular/http'

import { CrmComponent }  from './crm/crm.component'
import  { CustomerComponent, CustomersComponent }  from './customer/index'
import { HeroComponent } from './hero/hero.component'
import { HeroDetailComponent } from './hero/hero-detail.component'
import { FooterComponent } from './footer/footer.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ CrmComponent, HeroComponent, HeroDetailComponent, CustomerComponent, FooterComponent, CustomersComponent ],
  bootstrap:    [ CrmComponent ]
})

export class AppModule { }
