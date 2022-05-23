import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { CookieService } from 'ngx-cookie-service';
import { SidebarNavMenuComponent } from './components/Layout/sidebar-nav-menu/sidebar-nav-menu.component';
import { LogoutComponent } from './views/logout/logout.component';
import { AdminLayoutComponent } from './views/layout/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './views/layout/login-layout/login-layout.component';
import { HeaderComponent } from './components/Layout/header/header.component';
import { NewListingsComponent } from './components/Charts/new-listings/new-listings.component';
import { PurchasesComponent } from './components/Charts/purchases/purchases.component';
import { PaymentsComponent } from './components/Charts/payments/payments.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DatePipe } from '@angular/common';
import { ProductCardComponent } from './components/Product/product-card/product-card.component';
import { ProductCardLoaderComponent } from './components/Product/product-card-loader/product-card-loader.component';
import { ProductCardTransactionComponent } from './components/Product/product-card-transaction/product-card-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarNavMenuComponent,
    LogoutComponent,
    AdminLayoutComponent,
    LoginLayoutComponent,
    HeaderComponent,
    NewListingsComponent,
    PurchasesComponent,
    PaymentsComponent,
    ProductCardComponent,
    ProductCardLoaderComponent,
    ProductCardTransactionComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 }},
    CookieService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
