import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './components/action/action.component';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CustomFormComponent } from './stock/custom-form/custom-form.component';
import { DataTableComponent } from './stock/data-table/data-table.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';

const routes: Routes = [
  {
    path: '',
    component: ActionComponent,
  },
  {
    path: 'list',
    component: CatalogListComponent,
  },{
    path: 'stock',
    component: CustomFormComponent,
  },
  {
    path:'stockList',
    component:CustomFormComponent,
  },
  {
    path:'customForm',
    component:CustomFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
