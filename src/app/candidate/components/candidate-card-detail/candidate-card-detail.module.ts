import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCardDetailComponent } from './candidate-card-detail.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [CandidateCardDetailComponent],
    exports: [CandidateCardDetailComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CandidateCardDetailModule { }
