import { Component } from '@angular/core';
import { AuthComponent } from "../auth.component";
import { CreateUserGQL } from '../../../../generated/graphql';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(private readonly createUserGql:CreateUserGQL) { }

  signUp({email, password} : any){
    this.createUserGql.mutate({createUserData: {email, password}}).subscribe();
  }
}
