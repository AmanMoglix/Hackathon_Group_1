import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionFormComponent } from './components/action-form/action-form.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path:'',component:ActionFormComponent
  },
  {path:'logout',component:LogoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationRoutingModule { }
