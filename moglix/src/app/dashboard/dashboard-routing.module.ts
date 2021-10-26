import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admindashboard/admindashboard.module').then(m => m.AdmindashboardModule)
  }
  ,{
    path: 'agent',
    loadChildren: () => import('./agentdashboard/agentdashboard.module').then(m => m.AgentdashboardModule)
  },{
    path: 'oms',
    loadChildren: () => import('./omsdashboard/omsdashboard.module').then(m => m.OmsdashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
