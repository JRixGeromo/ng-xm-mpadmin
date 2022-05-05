import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHelperGuard } from './helpers/auth-helper.guard';
import { NonAuthenticatedGuard } from './helpers/non-authenticated.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    canActivate: [AuthHelperGuard],
  },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthenticatedGuard],
  },
  { 
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthHelperGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
