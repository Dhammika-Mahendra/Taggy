import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  loginForm!: FormGroup; 
  submitLabel : string  = 'Log In';
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor() {}

  getEmailErrorMessage() {
    if(this.email?.hasError('required')){
      return 'You must enter a value';
    }
    if(this.email?.hasError('email')){
      return 'Not a valid email';
    }
    return '';
  }

  getPasswordErrorMessage() {
    if(this.password?.hasError('required')){
      return 'You must enter a password';
    }
    return '';
  }

  onSubmit(){

  }
 
}
