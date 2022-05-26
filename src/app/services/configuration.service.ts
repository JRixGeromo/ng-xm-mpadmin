import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHelperGuard } from '../helpers/auth-helper.guard';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(
    private apiService: ApiService, 
    private authHelper: AuthHelperGuard, 
    private authService: AuthService,
    private http: HttpClient
  ) { }

  getConfigurationByName(name: any) {
    const config = {
      ...this.apiService.SetAuthHeader(),
    };
  
    if (!this.authHelper.isLoggin()) {
      const authResp = this.authService.setSuperAdminHeader();
      config.headers.Authorization = `Bearer ${authResp}`;
    }

    return this.http.get( this.apiService.ApiIniBaseUrl + `api/configuration/v1/${name}`, config);
  }

}
