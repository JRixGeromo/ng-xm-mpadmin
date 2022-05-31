import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getPurchasesChart() {
    return this.http.get( this.apiService.MpApiIniBaseUrl + 'api/mp/transaction/v1/transaction/dashboard/purchases', this.apiService.SetAuthHeader());
  }

  getPaymentsChart() {
    return this.http.get( this.apiService.MpApiIniBaseUrl + 'api/mp/transaction/v1/transaction/dashboard/payments', this.apiService.SetAuthHeader());
  }

  getTransactions() {
    return this.http.get( this.apiService.MpApiIniBaseUrl + 'api/mp/transaction/v1/transactions', this.apiService.SetAuthHeader());
  }

}
