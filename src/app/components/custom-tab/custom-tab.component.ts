import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.scss']
})
export class CustomTabComponent implements OnInit {

  @Input() tabs: any;
  constructor() { }

  ngOnInit(): void {
  }

}
