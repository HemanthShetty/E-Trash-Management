import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {CollectionPoint} from "../models/cpoint.model.client";


@Injectable()

export class CollectionPointService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;


  findCollectionPoints() {
    return this._http.get(this.baseUrl + '/api/collectionpoint')
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  deleteCollectionPoint(cPointId) {
    return this._http.delete(this.baseUrl + '/api/collectionpoint/' + cPointId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  createCollectionPoint(collectionPoint: CollectionPoint) {
    return this._http.post(this.baseUrl + '/api/collectionpoint', collectionPoint)
      .map((res: Response) => {
          return res.json();
        }
      );
  }
}

