import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { LoginService } from './login.service';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnDestroy {
  private loginSub: Subscription;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  public login(username : string , password : string) {
    this.loginService.login(username, password);
  }

  public register(username: string, password : string) {
    this.loginService.signup(username, password);
  }

  public get isLoggedIn() : boolean {
    return this.loginService.isAuthenticated();
  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
