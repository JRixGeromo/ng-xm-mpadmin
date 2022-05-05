import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthHelperGuard } from './auth-helper.guard';

@Injectable({
  providedIn: 'root'
})
export class NonAuthenticatedGuard implements CanActivate {

  constructor(
    private authHelper: AuthHelperGuard,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('non-authhelper', this.authHelper.isLoggin());
      if(this.authHelper.isLoggin()) {
        this.router.navigate(['/']);
        return false;
      } else { return true; }
  }
  
}
