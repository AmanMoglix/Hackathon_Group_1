import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineRoutingModule } from './online-routing.module';
import { OnlineFormComponent } from './components/online-form/online-form.component';
import { OnlineListComponent } from './components/online-list/online-list.component';
import { OnlineActionComponent } from './components/online-action/online-action.component';
import { OnlineComponent } from './components/online/online.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OnlineFormComponent,
    OnlineListComponent,
    OnlineActionComponent,
    OnlineComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OnlineRoutingModule
  ]
})
export class OnlineModule { }
