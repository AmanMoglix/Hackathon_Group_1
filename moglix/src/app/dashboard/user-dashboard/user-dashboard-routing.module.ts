import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardActionComponent } from './dashboard-action/dashboard-action.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
