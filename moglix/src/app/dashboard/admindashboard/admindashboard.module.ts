import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmindashboardRoutingModule } from './admindashboard-routing.module';
import { ActionComponent } from './action/action.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    ActionComponent,
    AdminComponent,
    
  ],
  imports: [
    CommonModule,
    AdmindashboardRoutingModule
  ]
})
export class AdmindashboardModule { }
