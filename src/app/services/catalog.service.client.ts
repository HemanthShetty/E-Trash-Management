/**
 * Created by hemanthshetty on 12/9/17.
 */


import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Catalog} from "../models/catalog.model.client";


@Injectable()

export class CatalogService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;


  getItems() {
    return this._http.get(this.baseUrl + '/api/catalog')
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  createCatalogItem(catalogItem) {
    return this._http.post(this.baseUrl + '/api/catalog', catalogItem)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findItemById(itemId: String) {
    return this._http.get(this.baseUrl + '/api/catalog/' + itemId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  updateCatalogItem(itemId: String,catalogItemDetails: Catalog) {
    return this._http.put(this.baseUrl + '/api/catalog/' + itemId, catalogItemDetails)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  deleteCatalogItem(itemId) {
    return this._http.delete(this.baseUrl + '/api/catalog/' + itemId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

}


