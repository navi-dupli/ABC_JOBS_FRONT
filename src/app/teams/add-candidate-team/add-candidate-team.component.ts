import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from 'src/app/models/custom-dialog.model';

@Component({
  selector: 'app-add-candidate-team',
  templateUrl: './add-candidate-team.component.html',
  styleUrls: ['./add-candidate-team.component.scss']
})
export class AddCandidateTeamComponent implements OnInit {

  addMember: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }

  constructor(
    private translate: TranslateService
  ) {
    this.addMember = new FormGroup({
      projectId: new FormControl('', [Validators.required]),
      teamId: new FormControl('', [Validators.required]),
      candidate: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {

  }

  closeModal(event) {

  }

  get projectId() { return this.addMember.get('projectId'); }

}
