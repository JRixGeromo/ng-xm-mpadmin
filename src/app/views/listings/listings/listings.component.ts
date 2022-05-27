import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  listings: any;
  listingRes: any;
  activeTabName: string = 'all';
  tabOptions: any;
  pagination: any = {
    itemPerPage: 9,
    totalRecord: 0,
    currentPage: 0,
  };
  paginationTimeout!: any;
  dataList: any;
  keyWord: string = '';

  constructor(
    private productService: ProductService, 
    private configurationService: ConfigurationService,
    private constantsService: ConstantsService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getLicenses();
  }

  getLicenses() {
    this.configurationService.getConfigurationByName(this.constantsService.CONFIGURATION_NAMES.productLicense).subscribe((data : any) => {
      const raw = data[0].configurations.map((config: any) => JSON.parse(config.value));
      this.tabOptions = raw.map((el: any) => {
        const res = {
          tabName: el.name.toLowerCase(),
          tabLabel: el.name,
        };
        return res;
      });
      this.tabOptions.unshift({
        tabName: 'all',
        tabLabel: 'All',
      });
    });
  };

  slicePage(params: any) {
    this.listings = this.listingRes;
    const paginationDetails = {
      itemPerPage: params.itemPerPage,
      totalRecord: this.listings.length,
      currentPage: params.currentPage,
    };
    const data = {
      pagination: paginationDetails,
      data: this.listings.slice(
        (params.itemPerPage * params.currentPage),
        (params.itemPerPage * (params.currentPage + 1)),
      ),
    };
    return data;
  };

  paginationCallback(page: any) {
    const newPagination = {
      ...this.pagination,
      currentPage: page - 1,
    };
    const prodDataList = this.slicePage({
      ...newPagination,
    });
    this.dataList = [];
    this.paginationTimeout = setTimeout(() => {
      if (this.activeTabName !== 'all') {
        this.dataList = prodDataList.data.filter((x: any) => x.characters.some((y: any) => y.license.name.toLowerCase() === this.activeTabName));
      } else {
        this.dataList = prodDataList.data;
      }
    }, 1);
    this.pagination = prodDataList.pagination;
  };

  getTabLicense(tab: any) {
    if (tab === 'all') {
      this.listings = this.listingRes;
      this.dataList = this.listings;
    } else {
      this.listings = this.listingRes.filter((x: any) => x.characters.some((y: any) => y.license.name.toLowerCase() === tab));
      this.dataList = this.listings;
    }
    this.paginationCallback(1);
  };

  getSortBy(sortBy: any) {
    if (sortBy === 'Newest') {
      this.listings = this.listingRes.sort((a: any, b: any) => new Date(b.createdDate).valueOf() - new Date(a.createdDate).valueOf());
    } else {
      this.listings = this.listingRes.sort((a: any, b: any) => new Date(a.createdDate).valueOf() - new Date(b.createdDate).valueOf());
    }
    this.dataList = this.listings;
    this.getTabLicense(this.activeTabName);
  };

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.listingRes = data;
      this.getSortBy('Newest');
    });
  };

  searchThis() {
    this.dataList = this.keyWord ?
    this.listings.filter((x: any) => x.name.toLowerCase().includes(this.keyWord.toLowerCase())) : this.listings;
  };

  onChangePage(pe:PageEvent) {
    /* console.log('pageIndex', pe.pageIndex);
    console.log('pageSize', pe.pageSize); */
    pe.pageIndex++;
    this.pagination.currentPage = pe.pageIndex;
    this.paginationCallback(this.pagination.currentPage);
  }

}
