import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHelperGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) { }

  isLoggin() {
    const authToken = this.cookieService.get('Test');
    if (authToken === null || authToken === '') {
      return false;
    } else {
      return true;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isUserLoggedIn = this.isLoggin();

      if (!isUserLoggedIn) {
        this.router.navigate(['/login']);
      }

      return isUserLoggedIn;
  }
  
}
