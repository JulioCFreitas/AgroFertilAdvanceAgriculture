import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './services/auth-guard.service';
import { NavegationComponent } from './navegation/navegation.component';
import { InsightsComponent } from './insights/insights.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignUpComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "user",
        component: UserComponent,
        canActivate: [AuthGuard]
    },{
        path: "navegation",
        component: NavegationComponent
    }
];
