import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getProfilebyUserId(userId: string) {
    return this.http.get(`/api/mp/profile/v1/${userId}/profile/user`);
  }

}
