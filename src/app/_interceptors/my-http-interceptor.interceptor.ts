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
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NjkzMzM4NCwiZXhwIjoxNjQ3Nzk3Mzg0fQ.8aqaeWa5MADEqp4VM4kqTqWd0zQMszaaWnxYv9mGoHHJGdblHR8e7Jpd6G1gxMDJbVRftLmlqOADvn51R1sWrw';

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
