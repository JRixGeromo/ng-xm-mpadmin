import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHelperGuard } from './helpers/auth-helper.guard';
import { NonAuthenticatedGuard } from './helpers/non-authenticated.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdminLayoutComponent } from './views/layout/admin-layout/admin-layout.component';
import { ListingsComponent } from './views/listings/listings/listings.component';
import { ProductDetailComponent } from './views/listings/product-detail/product-detail.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { SettingsComponent } from './views/settings/settings/settings.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { UsersComponent } from './views/users/users/users.component';

const routes: Routes = [
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
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthHelperGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthHelperGuard],
        children: [
          { path: 'listings', component: ListingsComponent },
          { path: 'product/:id', component: ProductDetailComponent },
          { path: 'transactions', component: TransactionsComponent },
          { path: 'users', component: UsersComponent },
          { path: 'settings', component: SettingsComponent },
          { path: '', component: DashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
