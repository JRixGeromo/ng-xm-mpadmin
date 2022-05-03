import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  login(loginCredentials: object) {
    const loginDetails = {
      ...loginCredentials,
      applicationDomain: environment.ANG_APP_APPLICATION_DOMAIN,
      secret: environment.ANG_APP_SECRET,
    };
    return this.http.post( this.apiService.ApiIniBaseUrl + 'api/user/v1/auth', loginDetails, {'headers':this.apiService.headers});
  }

  logout() {
      return this.http.post( this.apiService.ApiIniBaseUrl + '/api/user/v1/session/terminate', null, this.apiService.SetAuthHeader());
  }

}
