import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthHelperGuard } from 'src/app/helpers/auth-helper.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private authHelper: AuthHelperGuard,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.logout();
    this.authHelper.removeAuthInfo();
    this._snackBar.open('Logout successfully.');
    this.router.navigate(['/']);
  }

}
