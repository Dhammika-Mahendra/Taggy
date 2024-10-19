// token.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
/*     const token = localStorage.getItem('taggy_token'); // Retrieve the token from local storage
    console.log(token);
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Attach the token
        }
      });
      console.log('attached token');
      return next.handle(cloned); // Pass the cloned request instead of the original request to the next handler
    } */
    console.log('hellow');
    return next.handle(req); // If no token, send the original request
  }
}
