import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCardDetailComponent } from './candidate-card-detail.component';

describe('CandidateCardDetailComponent', () => {
  let component: CandidateCardDetailComponent;
  let fixture: ComponentFixture<CandidateCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
