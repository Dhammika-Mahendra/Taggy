import { Routes } from '@angular/router';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    {path:'login', component: LogInComponent},
    {path:'signup', component: SignUpComponent},
    {path:'auth', component: AuthComponent }
];
