import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';

import { PersonService } from './person/person.service';
import { CanActivateAuthGuard } from './can-activate.service';
import { UserProfileService } from './login/userProfile.service';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, routableComponents],
  providers: [CanActivateAuthGuard, PersonService, LoginService, UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (loginService : LoginService){ }
}