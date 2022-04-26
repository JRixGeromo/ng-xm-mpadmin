import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private apiService: ApiService) { }

  login(loginCredentials: object) {
    console.log('loginCredentials', loginCredentials);
    console.log('baseUrl', this.apiService.baseUrl);
    console.log('headers', this.apiService.headers);
    return this.http.post( this.apiService.baseUrl + 'api/user/v1/auth', loginCredentials, {'headers':this.apiService.headers});
  }

}
