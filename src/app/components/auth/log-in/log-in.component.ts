import { Component } from '@angular/core';
import { AuthComponent } from "../auth.component";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  logIn({email, password} : any){

  }
}
