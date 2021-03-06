import { NgModule }       from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { FormsModule }    from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent }  from './dashboard/dashboard.component'
import  { CustomerComponent, CustomersComponent }  from './customer/index'
import { HeroComponent } from './hero/hero.component'
import { HeroDetailComponent } from './hero/hero-detail.component'
import { FooterComponent } from './footer/footer.component'
import { PageNotFoundComponent } from './dashboard/page-not-found.component'


const appRoutes: Routes = [
  { path: 'heroes', component: HeroComponent },
  { path: 'heroe-details', component: HeroDetailComponent },
  { path: 'customer-list', component: CustomersComponent },
  { path: 'customer-details', component: CustomerComponent },
  { path: '**', component: PageNotFoundComponent },
    { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,  
    RouterModule.forRoot(appRoutes) 
  ],
  declarations: [ DashboardComponent, HeroComponent, HeroDetailComponent, CustomerComponent, FooterComponent, CustomersComponent, PageNotFoundComponent ],
  bootstrap:    [ DashboardComponent ]
})

export class AppModule { }
