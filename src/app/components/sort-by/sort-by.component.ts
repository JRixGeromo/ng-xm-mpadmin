import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent implements OnInit {

  @Output('getSortBy') getSortBy: EventEmitter<any> = new EventEmitter();

  sortBy: any;
  sortOptions = [
    {
      label: 'Newest',
    },
    {
      label: 'Oldest',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
