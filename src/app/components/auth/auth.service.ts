import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subject, tap } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authenticated = new Subject<boolean>();
  authenticated$ = this.authenticated.asObservable();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) {}

  setToken(token: string) {
    localStorage.setItem('taggy_token', token);
  }

  isAuthenticated() {
    const token = localStorage.getItem('taggy_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.httpClient.post<boolean >(
      `${environment.httpAPI}/auth`,"", {headers}
      )
  }
 
  logout() {
    this.httpClient.post(`${environment.httpAPI}/auth/logout`, {}).subscribe(() => {
      localStorage.removeItem('taggy_token');
      this.authenticated.next(false);
      this.router.navigate(['/login']);
    });
  }
}
