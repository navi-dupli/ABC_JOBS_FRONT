import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCandidateComponent } from './search-candidate.component';

describe('SearchCandidateComponent', () => {
  let component: SearchCandidateComponent;
  let fixture: ComponentFixture<SearchCandidateComponent>;
  const currentUser = { access_token: 'your-access-token' };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCandidateComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
