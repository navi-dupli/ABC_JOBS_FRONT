import { Component, Input, OnInit } from '@angular/core';
import { CustomDialogModel } from 'src/app/models/custom-dialog.model';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {

  @Input() set dataModal(data: CustomDialogModel) {
    this.data = data;
  }

  data: CustomDialogModel;

  constructor() { }

  ngOnInit(): void {
  }

}
