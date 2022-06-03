import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProfileService } from 'src/app/services/profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  profiles: any;
  listingRes: any;
  defaultProfileImg = environment.ANG_APP_DEFAULT_PIC_URL;
  pagination: any = {
    itemPerPage: 8,
    totalRecord: 0,
    currentPage: 0,
  };
  paginationTimeout!: any;
  dataList: any;
  keyWord: string = '';

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.retreiveProfiles();
  }

  retreiveProfiles() {
    this.profileService.retreiveProfiles().subscribe((data: any) => {
      this.profiles = data;
      this.listingRes = this.profiles.sort((a: any, b: any) => new Date(b.createdDate).valueOf() - new Date(a.createdDate).valueOf());
      this.getSortBy('Newest');
    });
  };

  slicePage(params: any) {
    const paginationDetails = {
      itemPerPage: params.itemPerPage,
      totalRecord: this.profiles.length,
      currentPage: params.currentPage,
    };
    const data = {
      pagination: paginationDetails,
      data: this.profiles.slice(
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
    const usersDataList = this.slicePage({
      ...newPagination,
    });
    this.dataList = [];
    this.paginationTimeout = setTimeout(() => {
      this.dataList = usersDataList.data;
    }, 1);
    this.pagination = usersDataList.pagination;
  };

  getSortBy(sortBy: any) {
    if (sortBy === 'Newest') {
      this.listingRes = this.listingRes.sort((a: any, b: any) => new Date(b.createdDate).valueOf() - new Date(a.createdDate).valueOf());
    } else {
      this.listingRes = this.listingRes.sort((a: any, b: any) => new Date(a.createdDate).valueOf() - new Date(b.createdDate).valueOf());
    }
    this.dataList = this.listingRes;
    this.paginationCallback(1);
  };

  searchThis() {
    this.dataList = this.keyWord ?
    this.listingRes.filter((x: any) => x.firstName.toLowerCase().includes(this.keyWord.toLowerCase())) : this.listingRes;
  };

  onChangePage(pe:PageEvent) {
    pe.pageIndex++;
    this.pagination.currentPage = pe.pageIndex;
    this.paginationCallback(this.pagination.currentPage);
  }

}
