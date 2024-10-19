import { Component } from '@angular/core';
import { AuthComponent } from "../auth.component";
import { LoginService } from './log-in.service';
import { Router } from '@angular/router';
import { CreateUserInput } from '../../../../generated/graphql';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(
    private readonly loginService: LoginService, 
    private readonly router : Router, 
    private readonly authService : AuthService,
    private readonly httpClient: HttpClient
    ){}

  logIn(createUserData: CreateUserInput){
    this.loginService.login(createUserData).subscribe((response : any) => {
      if(response){
        this.authService.isAuthenticated().subscribe((response : any) => {});
      }
    })
  }
}
