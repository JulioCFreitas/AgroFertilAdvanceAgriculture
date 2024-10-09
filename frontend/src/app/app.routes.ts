import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './services/auth-guard.service';
import { NavegationComponent } from './navegation/navegation.component';
import { MinhaTerraComponent } from './pages/minha-terra/minha-terra.component';  // Componentes importados
import { IAComponent } from './pages/ia/ia.component';
import { ConsultoriaComponent } from './pages/consultoria/consultoria.component';
import { HistoricoComponent } from './pages/historico/historico.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'navegation',
        component: NavegationComponent
    },
    // Rotas para os componentes correspondentes
    {
        path: 'minha-terra',
        component: MinhaTerraComponent
    },
    {
        path: 'ia',
        component: IAComponent
    },
    {
        path: 'consultoria',
        component: ConsultoriaComponent
    },
    {
        path: 'historico',
        component: HistoricoComponent
    }
];
