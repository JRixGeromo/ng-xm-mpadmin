import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';

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
  coinbase = false;
  metamask = false;
  other = false;
  otherInput: any;
  commission: number = 0;
  configuration: any;

  constructor(
    private configurationService: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.configurationService.getConfigurationByName('Platform Settings').subscribe((data: any) => {
      this.configuration = data;
      this.commission = data[0].configurations[0].value;
    });
  }

  updateCommission() {
    const obj = [{
      name: this.configuration[0].configurations[0].name,
      value: this.commission,
      dataType: 'string',
    }];
    this.configurationService.updateCommission(obj).subscribe(data => {
      console.log(data);
    })
  }

}
