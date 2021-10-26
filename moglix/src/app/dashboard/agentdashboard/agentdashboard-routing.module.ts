import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { AgentComponent } from './agent/agent.component';
import { AssignedOrderComponent } from './assigned-order/assigned-order.component';

const routes: Routes = [
  {path: '', component:AgentComponent},
  {path: 'order',component:AssignedOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentdashboardRoutingModule { }
