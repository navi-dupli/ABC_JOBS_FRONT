import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidateTeamComponent } from './add-candidate-team.component';

describe('AddCandidateTeamComponent', () => {
  let component: AddCandidateTeamComponent;
  let fixture: ComponentFixture<AddCandidateTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCandidateTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCandidateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
