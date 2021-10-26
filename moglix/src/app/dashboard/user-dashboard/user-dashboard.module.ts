import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { DashboardActionComponent } from './dashboard-action/dashboard-action.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    DashboardActionComponent,
    ListComponent,
    UserComponent,
    LogOutComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NgbAlertModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
