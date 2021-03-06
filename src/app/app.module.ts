import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import {UserService} from "./services/user.service.client";
import {SharedService} from "./services/shared.service.client";
import { AgmCoreModule } from '@agm/core';
import { CollectionpointEditComponent } from './components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component';
import { CollectionpointNewComponent } from './components/collectionpoint/collectionpoint-new/collectionpoint-new.component';
import { CollectionpointListComponent } from './components/collectionpoint/collectionpoint-list/collectionpoint-list.component';
import {CollectionPointService} from "./services/cpoint.service.client";
import { CatalogListComponent } from './components/catalog/catalog-list/catalog-list.component';
import { CatalogNewComponent } from './components/catalog/catalog-new/catalog-new.component';
import { CatalogEditComponent } from './components/catalog/catalog-edit/catalog-edit.component';
import {CatalogService} from "./services/catalog.service.client";
import { SellComponent } from './components/sell/sell.component';
import {GoogleMapsService} from "./services/googlemaps.service.client";
import { DropoffNewComponent } from './components/dropoff/dropoff-new/dropoff-new.component';
import {DropOffService} from "./services/dropoff.service.client";
import { CustomerDropoffsComponent } from './components/dropoff/customer-dropoffs/customer-dropoffs.component';
import { DropoffCollectionpointComponent } from './components/dropoff/dropoff-collectionpoint/dropoff-collectionpoint.component';
import { PersonalComponent } from './components/personal/personal.component';
import { CreateComponent } from './components/user/create/create.component';
import { EditComponent } from './components/user/edit/edit.component';
import { ListComponent } from './components/user/list/list.component';
import { DropoffEditComponent } from './components/dropoff/dropoff-collectionpoint/dropoff-edit/dropoff-edit.component';
import { BuyComponent } from './components/buy/buy.component';
import {AuthGuard} from "./services/auth-guard.service";
import { AboutComponent } from './components/about/about.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CatalogListComponent,
    PaymentComponent,
    CollectionpointEditComponent,
    CollectionpointNewComponent,
    CollectionpointListComponent,
    CatalogListComponent,
    CatalogNewComponent,
    CatalogEditComponent,
    SellComponent,
    DropoffNewComponent,
    CustomerDropoffsComponent,
    DropoffCollectionpointComponent,
    PersonalComponent,
    CreateComponent,
    EditComponent,
    ListComponent,
    DropoffEditComponent,
    BuyComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey:
      'AIzaSyCMwJEcq8gK7hFL32MqJ91CwQNy1k6z6dw',
      libraries: ["places"]
    })
  ],
  // Client Side services here
  providers: [ TestService, UserService, SharedService, CollectionPointService, CatalogService, GoogleMapsService, DropOffService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
