import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthHelperGuard } from '../helpers/auth-helper.guard';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ApiIniBaseUrl: string = environment.ANG_APP_GENERIC_API_DOMAIN;
  MpApiIniBaseUrl: string = environment.ANG_APP_MP_API_DOMAIN;
  headers = new HttpHeaders().set('content-type', 'application/json')

  constructor(
    private authHelper: AuthHelperGuard
  ) { }

  SetAuthHeader() {
    return {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authHelper.getAuthToken()}`,
      },
    };
  }

}
