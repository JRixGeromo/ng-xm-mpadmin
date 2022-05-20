import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getNewlistingCharts() {
    return this.http.get( this.apiService.MpApiIniBaseUrl + '/api/mp/product/v1/product/dashboard/newlistingcharts', this.apiService.SetAuthHeader());
  }

}
