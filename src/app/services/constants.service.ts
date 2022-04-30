import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  AUTH_TOKEN_KEY: string = 'auth_token';
  AUTH_ID: string = 'auth_id';
  ADMIN_ROLE: string = 'XM Admin';

  constructor() { }
}
