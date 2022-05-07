import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthHelperGuard } from './helpers/auth-helper.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title: string = 'ng-xm-mpadmin';
  checkIsLogin: boolean = false;

  constructor(
    private authService: AuthHelperGuard,
  ) { console.log('app component constructor', this.checkIsLogin);
  this.checkIsLogin = this.authService.isLoggin(); }

  ngOnInit(): void {
    console.log('app component ngOnInit', this.checkIsLogin);
    this.checkIsLogin = this.authService.isLoggin();
  }

  ngOnChanges(): void {
    console.log('app component ngOnChanges', this.checkIsLogin);
    this.checkIsLogin = this.authService.isLoggin();
  }
}
