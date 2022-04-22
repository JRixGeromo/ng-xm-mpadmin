import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.cypress.io/';

  constructor(private http: HttpClient) { }

  loginUser(userObj: object) {
    return this.http.post(this.baseUrl + 'users', userObj);
  }

}
