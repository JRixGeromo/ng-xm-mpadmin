import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHelperGuard } from './helpers/auth-helper.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';

const routes: Routes = [
  { 
    path: '' , 
    component: DashboardComponent,
    canActivate: [AuthHelperGuard],
  },
  { 
    path: 'login' ,
    component: LoginComponent,
  },
  { 
    path: 'logout' ,
    component: LogoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
