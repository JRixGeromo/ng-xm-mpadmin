import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConstantsService } from '../services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHelperGuard implements CanActivate, CanActivateChild {

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private constantsService: ConstantsService
  ) { }

  isLoggin() {
    const authToken = this.cookieService.get(this.constantsService.AUTH_TOKEN_KEY);
    if (authToken === null || authToken === '') {
      return false;
    } else {
      return true;
    }
  }

  getAuthToken() {
    return this.cookieService.get(this.constantsService.AUTH_TOKEN_KEY);
  }

  getAuthID() {
    return this.cookieService.get(this.constantsService.AUTH_ID);
  }

  saveAuthInfo(authInfo: any) {
    this.cookieService.set(this.constantsService.AUTH_TOKEN_KEY, authInfo.token);
    this.cookieService.set(this.constantsService.AUTH_ID, authInfo);
  }

  removeAuthInfo() {
    this.cookieService.delete(this.constantsService.AUTH_TOKEN_KEY);
    this.cookieService.delete(this.constantsService.AUTH_ID);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      if (!this.isLoggin()) {
        this.router.navigate(['login']);
      }

      return this.isLoggin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  
}
