/**
 * Created by hemanthshetty on 12/9/17.
 */


import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


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

}


