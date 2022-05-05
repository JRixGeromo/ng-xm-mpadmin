import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-sidebar-nav-menu',
  templateUrl: './sidebar-nav-menu.component.html',
  styleUrls: ['./sidebar-nav-menu.component.scss']
})
export class SidebarNavMenuComponent implements OnInit {

  menu: any;

  constructor(
    private navMenu: ConstantsService
  ) { this.menu = this.navMenu.NAV_MENU }

  ngOnInit(): void {
    
  }

}
