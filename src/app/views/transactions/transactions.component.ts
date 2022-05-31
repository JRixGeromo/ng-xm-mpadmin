import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactionsList: any;
  transactionsListRes: any;
  transactionsListLoading: boolean = true;
  activeStatus: string = 'all';
  tabOptions: any;
  pagination: any = {
    itemPerPage: 8,
    totalRecord: 0,
    currentPage: 0,
  };
  paginationTimeout!: any;
  dataList: any;
  keyWord: string = '';

  constructor(
    private transactionService: TransactionService, 
    private configurationService: ConfigurationService,
    private constantsService: ConstantsService,
  ) {}

  ngOnInit(): void {
    this.getTransactions();
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
    });
  };

  slicePage(params: any) {
    const paginationDetails = {
      itemPerPage: params.itemPerPage,
      totalRecord: this.transactionsList.length,
      currentPage: params.currentPage,
    };
    const data = {
      pagination: paginationDetails,
      data: this.transactionsList.slice(
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
    const transDataList = this.slicePage({
      ...newPagination,
    });
    this.dataList = [];
    this.paginationTimeout = setTimeout(() => {
        this.dataList = transDataList.data;
    }, 1);
    this.pagination = transDataList.pagination;
  };

  newActiveStatus(status: any) {
    this.activeStatus = status;
    if (status === 'all') {
      this.transactionsList = this.transactionsListRes;
    } else {
      this.transactionsList = this.transactionsListRes.filter((x: any) => x.status.toLowerCase().includes(status));
    }
    this.dataList = this.transactionsList;
    this.paginationCallback(1);
  };

  getSortBy(sortBy: any) {
    if (sortBy === 'Newest') {
      this.transactionsList = this.transactionsListRes.sort((a: any, b: any) => new Date(b.createdDate).valueOf() - new Date(a.createdDate).valueOf());
    } else {
      this.transactionsList = this.transactionsListRes.sort((a: any, b: any) => new Date(a.createdDate).valueOf() - new Date(b.createdDate).valueOf());
    }
    this.dataList = this.transactionsList;
    this.newActiveStatus(this.activeStatus);
  };

  getTransactions() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactionsListRes = data;
      this.getSortBy('Newest');
    });
  };

  searchThis() {
    this.dataList = this.keyWord ?
    this.transactionsList.filter((x: any) => x.name.toLowerCase().includes(this.keyWord.toLowerCase())) : this.transactionsList;
  };

  onChangePage(pe:PageEvent) {
    pe.pageIndex++;
    this.pagination.currentPage = pe.pageIndex;
    this.paginationCallback(this.pagination.currentPage);
  }

}
