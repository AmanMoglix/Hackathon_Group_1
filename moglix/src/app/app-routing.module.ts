import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';

const routes: Routes = [
  {
    path: '',component:LandingComponent
  },
  {path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{
  path: 'catalog', 
  loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule),canActivate:[AuthGuardGuard]
},
{
  path:'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuardGuard]

},{
  path:'online',
  loadChildren: () => import('./online/online.module').then(m => m.OnlineModule),canActivate:[AuthGuardGuard]
},{
  path:'user',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  canActivate:[AuthGuardGuard]
},{
  path:'supplier',
  loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)
},
{
  path:'creation',
  loadChildren: () => import('./creation/creation.module').then(m => m.CreationModule),canActivate:[AuthGuardGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
