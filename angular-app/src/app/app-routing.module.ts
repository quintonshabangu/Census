import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsComponent } from './person/persons.component';
import { PersonListComponent } from './person/person-list.component';
import { PersonComponent } from './person/person.component';
import { LoginComponent } from './login/login.component';
import {ButtonComponent} from './button/button.component';

import { CanActivateAuthGuard } from './can-activate.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'persons', },
  { path: 'login', component: LoginComponent },
  { path: 'button/:text', component: ButtonComponent },
  {
    path: 'persons',
    component: PersonsComponent,
    canActivate: [CanActivateAuthGuard],
    canActivateChild: [CanActivateAuthGuard],
    children: [
      { path: '', component: PersonListComponent },
      { path: ':id', component: PersonComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'persons', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  PersonListComponent,
  PersonComponent,
  LoginComponent,
  PersonsComponent,
  ButtonComponent
];
