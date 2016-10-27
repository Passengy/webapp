import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private af: AngularFire, private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    this.af.auth.subscribe((auth) =>  {
      if(auth == null) {
        this.router.navigate(['/login']);
        this.authService.isLoggedIn = false;
      } else {
        this.authService.isLoggedIn = true;
      }
    })
    return this.authService.isLoggedIn;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  // canLoad(route: Route): boolean {
  //   let url = `/${route.path}`;

  //   return this.checkLogin(url);
  // }

  // checkLogin(url: string): boolean {
  //   if (this.authService.isLoggedIn) { return true; }

  //   // Store the attempted URL for redirecting
  //   this.authService.redirectUrl = url;

  //   // Create a dummy session id
  //   let sessionId = 123456789;

  //   // Set our navigation extras object
  //   // that contains our global query params and fragment
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: { 'session_id': sessionId },
  //     fragment: 'anchor'
  //   };

  //   // Navigate to the login page with extras
  //   this.router.navigate(['/login'], navigationExtras);
  //   return false;
  // }
}
