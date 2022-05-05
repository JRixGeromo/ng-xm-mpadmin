import { Component, OnInit } from '@angular/core';
import { AuthHelperGuard } from './helpers/auth-helper.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'ng-xm-mpadmin';
  checkIsLogin: boolean = false;

  constructor(
    private authService: AuthHelperGuard,
  ) {  }

  ngOnInit(): void {
    this.checkIsLogin = this.authService.isLoggin();
  }
}
