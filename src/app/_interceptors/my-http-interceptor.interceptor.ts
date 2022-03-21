import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {
  tenantID = 'fe_0721a';
  bearerToken =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NzUwNzE5OCwiZXhwIjoxNjQ4MzcxMTk4fQ.hDmA5CnOrvWrGOq_cOiMaptYKXUvU186b5BoxNRqjLrDfpByPrdIacV0GFkBA_U7lWVqK4LekBVXXAskE_ft6Q';

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let myReq: HttpRequest<any> = request;
    myReq = request.clone({
      headers: request.headers
        .set('Authorization', this.bearerToken)
        .set('X-TENANT-ID', this.tenantID),
    });

    return next.handle(myReq);
  }
}
