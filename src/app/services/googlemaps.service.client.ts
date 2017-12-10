// injecting service into module
import {Injectable} from "@angular/core";
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()

export class GoogleMapsService {

  constructor(private _http: Http) { }


  findLatLong(address: String) {
    return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + 'AIzaSyCMwJEcq8gK7hFL32MqJ91CwQNy1k6z6dw')
      .map((res: Response) => {
          return res.json();
        }
      );
  }
}
