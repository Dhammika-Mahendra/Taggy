import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserInput, User } from '../../../../generated/graphql';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly httpClient: HttpClient) {}

  login(loginRequest: CreateUserInput) {
    return this.httpClient.post<User>(`${environment.httpAPI}/auth/login`, loginRequest);
  }
}
