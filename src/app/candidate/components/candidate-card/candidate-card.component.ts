import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss']
})
export class CandidateCardComponent implements OnInit {

  @Input() set data(data) {
    this.candidate = data;
  }
  @Input() set candidateSelectedId(candidateSelectedId) {
    this.candidateSelected = candidateSelectedId;
  }

  @Output() selectedCandidate = new EventEmitter();
  candidate;
  candidateSelected;

  constructor() { }

  ngOnInit(): void {
  }

  selectedCard(){
    this.selectedCandidate.emit(this.candidate);
  }

}
