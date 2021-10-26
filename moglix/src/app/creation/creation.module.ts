import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationRoutingModule } from './creation-routing.module';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ActionFormComponent } from './components/action-form/action-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AddRoleComponent,
    AddEmployeeComponent,
    ActionFormComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreationRoutingModule
  ]
})
export class CreationModule { }
