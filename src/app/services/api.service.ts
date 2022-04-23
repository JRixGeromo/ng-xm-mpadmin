import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://authorization.api-dev.xyz/';
  headers= new HttpHeaders().set('content-type', 'application/json')

  constructor() { }

}
