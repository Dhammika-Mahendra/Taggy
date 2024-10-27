import { Routes } from '@angular/router';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/auth/auth.guard';
import { BookmarkDetailComponent } from './components/bookmark/bookmark-detail/bookmark-detail.component';

export const routes: Routes = [
    {path:'', redirectTo: 'login',pathMatch: 'full'},
    {path:'login', component: LogInComponent},
    {path:'signup', component: SignUpComponent},
    {path:'auth', component: AuthComponent },
    {path:'home', component: HomeComponent},
    {path:'bookmark/:id', component: BookmarkDetailComponent}
];
