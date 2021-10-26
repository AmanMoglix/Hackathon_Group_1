import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentdashboardRoutingModule } from './agentdashboard-routing.module';
import { ActionComponent } from './action/action.component';
import { AgentComponent } from './agent/agent.component';
import { LogoutComponent } from 'src/app/creation/components/logout/logout.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AssignedOrderComponent } from './assigned-order/assigned-order.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AssignedOrderChildComponent } from './assigned-order-child/assigned-order-child.component';


@NgModule({
  declarations: [
    ActionComponent,
    AgentComponent,
    LogOutComponent,
    AssignedOrderComponent,
    AssignedOrderChildComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    AgentdashboardRoutingModule
  ]
})
export class AgentdashboardModule { }
