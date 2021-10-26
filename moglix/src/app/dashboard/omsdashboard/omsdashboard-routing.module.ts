import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmsActionComponent } from './components/oms-action/oms-action.component';
import { OmsComponent } from './components/oms/oms.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component:OmsComponent
  },{
    path: 'orders',
    component:OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmsdashboardRoutingModule { }
