import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { CatalogComponent } from './components/catalog/catalog.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ShipmentComponent } from './components/shipment/shipment.component';
import { PaymentComponent } from './components/payment/payment.component';
import {UserService} from "./services/user.service.client";
import {SharedService} from "./services/shared.service.client";
import { AgmCoreModule } from '@agm/core';
import { CollectionpointEditComponent } from './components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component';
import { CollectionpointNewComponent } from './components/collectionpoint/collectionpoint-new/collectionpoint-new.component';
import { CollectionpointListComponent } from './components/collectionpoint/collectionpoint-list/collectionpoint-list.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CatalogComponent,
    ShipmentComponent,
    PaymentComponent,
    CollectionpointEditComponent,
    CollectionpointNewComponent,
    CollectionpointListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    AgmCoreModule.forRoot({apiKey:
      'AIzaSyCMwJEcq8gK7hFL32MqJ91CwQNy1k6z6dw'
    })
  ],
  // Client Side services here
  providers: [ TestService, UserService, SharedService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
