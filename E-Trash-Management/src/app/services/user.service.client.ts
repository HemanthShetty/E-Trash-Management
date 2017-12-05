import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class Userservice {


  baseUrl = environment.baseUrl;

  constructor(private http: Http) {
  }


  finduserByCredentials(username: String, password: String): Observable <any> {
    console.log('I am in client');
    const url =  this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        });
  }

  createUser(user: any): Observable <any> {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  findUserById(userid: String): Observable <any> {
    const url = this.baseUrl + '/api/user/' + userid;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );

  }

  findUserByUsername(username: String): Observable <any> {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        });
  }



  updateUser(userId, user): Observable <any> {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  deleteUser(userId: string): Observable <any> {
    const url = this.baseUrl + '/api/user' + userId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
