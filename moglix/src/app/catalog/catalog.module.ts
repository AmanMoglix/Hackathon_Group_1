import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { DataTableComponent } from './stock/data-table/data-table.component';
import { CustomFormComponent } from './stock/custom-form/custom-form.component';
import { ActionComponent } from './components/action/action.component';
import { LogOutComponent } from './components/log-out/log-out.component';
@NgModule({
  declarations: [
    CatalogFormComponent,
    CatalogListComponent,
    StockFormComponent,
    DataTableComponent,
    CustomFormComponent,
    ActionComponent,
    LogOutComponent,
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
