import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output('newActiveStatus')  newActiveStatus: EventEmitter<any> = new EventEmitter();

  activeStatus: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

}
