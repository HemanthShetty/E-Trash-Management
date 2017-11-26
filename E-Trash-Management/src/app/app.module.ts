import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { BuyComponent } from './components/src/app/components/Catalog/Catalog.component';
import { SellComponent } from './components/src/app/components/sell/sell.component';
import { UserComponent } from './components/src/app/components/user/user.component';
import { LoginComponent } from './components/user/src/app/components/user/login/login.component';
import { RegisterComponent } from './components/user/src/app/components/user/register/register.component';
import { ProfileComponent } from './components/user/src/app/components/user/profile/profile.component';
import { CatalogComponent } from './components/src/app/components/catalog/catalog.component';
import { ShipmentComponent } from './components/src/app/components/shipment/shipment.component';
import { PaymentComponent } from './components/src/app/components/payment/payment.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    BuyComponent,
    SellComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CatalogComponent,
    ShipmentComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ TestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
