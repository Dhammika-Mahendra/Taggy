import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
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
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  //component Parameters for SignUp and LogIn components
  @Output() onSubmitEvent = new EventEmitter<any>();
  @Input() submitLabel: string = '';

  //Form Value holders
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
    this.onSubmitEvent.emit({
      email: this.email.value,
      password: this.password.value
    })
  }
 
}
