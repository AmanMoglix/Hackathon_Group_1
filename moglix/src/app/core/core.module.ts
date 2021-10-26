import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    CoreRoutingModule
  ],exports:[FooterComponent, HeaderComponent]
})
export class CoreModule { }
