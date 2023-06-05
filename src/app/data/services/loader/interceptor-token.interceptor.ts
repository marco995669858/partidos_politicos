import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiClass } from '@data/schema/ApiClass.class';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenInterceptor extends ApiClass implements HttpInterceptor  {

  constructor() {
    super();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addHeaders(request);
    return next.handle(request)
  }

}
