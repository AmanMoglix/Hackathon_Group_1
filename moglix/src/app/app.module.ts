import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './shared/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { AuthGuardGuard } from './shared/auth-guard.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertService } from './shared/alerts.Service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 3500,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
  }
    ),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthService,AuthGuardGuard,AlertService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    { provide:HTTP_INTERCEPTORS, useClass: ErrorInterceptor,multi:true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
