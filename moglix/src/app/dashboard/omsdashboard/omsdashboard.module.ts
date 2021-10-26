import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmsdashboardRoutingModule } from './omsdashboard-routing.module';
import { OmsActionComponent } from './components/oms-action/oms-action.component';
import { OmsFormComponent } from './components/oms-form/oms-form.component';
import { OmsListComponent } from './components/oms-list/oms-list.component';
import { OmsComponent } from './components/oms/oms.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderChildComponent } from './order-child/order-child.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { LogOutComponent } from './log-out/log-out.component';


@NgModule({
  declarations: [
    OmsActionComponent,
    OmsFormComponent,
    OmsListComponent,
    OmsComponent,
    OrdersComponent,
    OrderChildComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,MatTableModule,
    OmsdashboardRoutingModule
  ]
})
export class OmsdashboardModule { }
