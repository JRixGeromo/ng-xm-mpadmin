import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  AUTH_TOKEN_KEY: string = 'auth_token';
  AUTH_ID: string = 'auth_id';
  ADMIN_ROLE: string = 'XM Admin';

  NAV_MENU = [
    {
      name: 'Dashboard',
      route: '/',
      icon: 'xm-el-icon-s-home',
      child: false,
    },
    {
      name: 'Listings',
      route: '/listings',
      icon: 'xm-el-icon-s-listing',
      child: false,
    },
    {
      name: 'Transactions',
      route: '/transactions',
      icon: 'xm-el-icon-s-cart',
      child: false,
    },
    {
      name: 'Users',
      route: '/users',
      icon: 'xm-el-icon-s-customer',
      child: false,
    },
    {
      name: 'Settings',
      route: '/settings',
      icon: 'xm-el-icon-s-settings',
      child: false,
    },
  ];

  constructor() { }
}
