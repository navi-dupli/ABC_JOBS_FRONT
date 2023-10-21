import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-card-detail',
  templateUrl: './candidate-card-detail.component.html',
  styleUrls: ['./candidate-card-detail.component.scss']
})
export class CandidateCardDetailComponent implements OnInit {

  @Input() set candidateSelected(candidateSelected) {
    this.candidate = candidateSelected;
  }
  candidate;

  constructor() { }

  ngOnInit(): void {
    console.log(this.candidate);
    
  }

}
