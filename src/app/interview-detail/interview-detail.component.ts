import { Component } from '@angular/core';
import {DetailInterviewService} from "../services/detail-interview/detail-interview.service";
import {ActivatedRoute} from "@angular/router";
import {DetailInterviewModel} from "../models/detail-interview";

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.scss']
})
export class InterviewDetailComponent {

  detailInterview: DetailInterviewModel;
  constructor(private detailInterviewService: DetailInterviewService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idInterview = params['id'];
      this.detailInterviewService.getDetailInterview(idInterview).subscribe((response: any) => {
        console.log(response)
        this.detailInterview = response;
      });
    });
  }
}
