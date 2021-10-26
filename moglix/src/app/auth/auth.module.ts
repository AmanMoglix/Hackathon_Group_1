import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthListComponent } from './components/auth-list/auth-list.component';
import { AuthComponent } from './service/auth/auth.component';


@NgModule({
  declarations: [
    AuthFormComponent,
    AuthListComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
