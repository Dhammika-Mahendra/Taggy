import { Component } from '@angular/core';
import { AuthComponent } from "../auth.component";
import { LoginService } from './log-in.service';
import { Router } from '@angular/router';
import { CreateUserInput } from '../../../../generated/graphql';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(private readonly loginService: LoginService, private readonly router : Router){}

  logIn(createUserData: CreateUserInput){
    this.loginService.login(createUserData).subscribe((user) => {})
  }
}
