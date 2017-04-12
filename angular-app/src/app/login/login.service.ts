import { Injectable,  } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router} from '@angular/router';

// Avoid name not found warnings
declare var auth0 : any;

@Injectable()
export class LoginService {

  constructor(private router: Router) {
  }

  // Configure Auth0
  auth0 = new auth0.WebAuth({
    domain: 'quintonshabangu.eu.auth0.com',
    clientID: 'JYYK1HjXr03Ah6UpyvOB6Po1UyLLFVoW',
    // specify your desired callback URL
    redirectUri: 'http://localhost:4200',
    responseType: 'token id_token'
  });



  public handleAuthentication(){
    this.auth0.parseHash({ _idTokenVerification: false }, (err, authResult) => {
      if (err) {
        alert(`Error: ${err.errorDescription}`)
      }
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.router.navigate(['/persons']);
      }
    });
  }

  public login(username: string, password: string) {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username,
      password
    }, err => {
      if (err) return alert(err.description);
    });

    this.handleAuthentication();
  }

  public signup(email, password) {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, err => {
      if (err) return alert(err.description);
    });
  }

  public loginWithGoogle(): void {
    this.auth0.authorize({
      connection: 'google-oauth2',
    });
  }

  public isAuthenticated() {
    // Check whether the id_token is expired or not
    return tokenNotExpired('id_token');
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }
}