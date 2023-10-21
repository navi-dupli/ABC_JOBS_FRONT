import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CommonsService } from './commons.service';

describe('CommonsService', () => {
  let service: CommonsService;
  const currentUser = { access_token: 'your-access-token' };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
