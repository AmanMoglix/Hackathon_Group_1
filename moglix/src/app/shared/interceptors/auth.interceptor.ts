import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isLoggedIn = this.authService.isAuthenticated();
    console.log("Auth Interceptor  adding authorization " ,isLoggedIn);
    if(isLoggedIn) {
      environment.bearer_token_header.Authorization = "Bearer "+localStorage.getItem(environment.oauth_token)
    }
    return next.handle(request);
  }
}
