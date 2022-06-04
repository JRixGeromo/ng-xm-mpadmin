import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  logoPanel = false;
  paymentPanel = false;
  comissionPanel = false;
  binance = false;
  enjin = false;
  trustWallet = false;

  constructor() { }

  ngOnInit(): void {
  }

}
