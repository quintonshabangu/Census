import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { LoginService } from './login/login.service';

@Injectable()
export class CanActivateAuthGuard implements CanActivate, CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(next, state);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isAuthenticated() == true) {
      return true;
    }

    else {
      this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });
      return false;
    }
    
  }
}
