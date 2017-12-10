/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {RegisterComponent} from './components/user/register/register.component';
import {LoginComponent} from "./components/user/login/login.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {CollectionpointListComponent} from "./components/collectionpoint/collectionpoint-list/collectionpoint-list.component";
import {CollectionpointNewComponent} from "./components/collectionpoint/collectionpoint-new/collectionpoint-new.component";
import {CollectionpointEditComponent} from "./components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component";
import {CatalogListComponent} from "./components/catalog/catalog-list/catalog-list.component";
import {CatalogNewComponent} from "./components/catalog/catalog-new/catalog-new.component";
import {CatalogEditComponent} from "./components/catalog/catalog-edit/catalog-edit.component";

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'register', component : RegisterComponent},
  {path : 'login' , component: LoginComponent},
  {path:  'user', component: ProfileComponent},
  {path : 'user/:userId/cpoint' , component: CollectionpointListComponent},
  {path : 'user/:uid/cpoint/new' , component: CollectionpointNewComponent},
  {path : 'user/:uid/cpoint/:wid' , component: CollectionpointEditComponent},
  {path : 'user/:uid/catalog' , component: CatalogListComponent},
  {path : 'user/:uid/catalog/new' , component: CatalogNewComponent},
  {path : 'user/:uid/catalog/:catalogId' , component: CatalogEditComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
