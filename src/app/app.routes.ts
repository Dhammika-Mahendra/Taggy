import { Routes } from '@angular/router';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/auth/auth.guard';

export const routes: Routes = [
    {path:'login', component: LogInComponent},
    {path:'signup', component: SignUpComponent},
    {path:'auth', component: AuthComponent },
    {path:'home', component: HomeComponent, canActivate: [AuthGuard] },
];
