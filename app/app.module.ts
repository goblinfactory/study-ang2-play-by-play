import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'
import { CustomerComponent } from './customer/customer.component'
import { FooterComponent } from './footer/footer.component'

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CustomerComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
