import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Hello from error interceptor")
    return next.handle(request)
    .pipe(catchError((err)=>{
      console.log("Error " +JSON.stringify(err))
      return throwError({
        status: err.status,
        statusText: err.statusText,
        statusMessage: err.statusMessage,
        error: err.error,
      })
    })
    );
  }
}
