import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  moduleId: module.id,
  selector: 'census-app',
  templateUrl: './app.component.html',
  styles: [`
    nav ul {list-style-type: none;}
    nav ul li {padding: 4px;cursor: pointer;display:inline-block}
  `],
  providers : [LoginService]
})

export class AppComponent {

  constructor (private loginService : LoginService) {
    this.loginService.handleAuthentication();
  }

  public isAuthenticated() {
    return this.loginService.isAuthenticated() == true;
  }

  public logout(){
    this.loginService.logout();
  }
}
