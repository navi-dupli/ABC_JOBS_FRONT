import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.scss']
})
export class SearchCandidateComponent implements OnInit {

  cities: any[];
  selectedMulti: any[] = [];
  selectedMulti2: any[] = [];
  selectedMulti3: any[] = [];
  selectedMulti4: any[] = [];
  selectedMulti5: any[] = [];

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit(): void {
  }

}
