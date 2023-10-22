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
    component.candidate = {
        "id": 16,
        "names": "Ana",
        "surnames": "Martínez",
        "email": "ana.matinez@exampleabc.com",
        "authId": "auth0|6534000699e2e441b3af9e64",
        "picture": "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=16&flip=true&radius=4",
        "rol": "CANDIDATO",
        "company_id": null,
        "typeIdentificationId": 1,
        "nameIdentification": "CC",
        "identification": "57412374",
        "phone": "6546546",
        "experienceYears": 1,
        "skills": [
            {
                "id": 6,
                "idAbility": 6,
                "name": "Java"
            },
            {
                "id": 7,
                "idAbility": 1,
                "name": "Python"
            },
            {
                "id": 8,
                "idAbility": 2,
                "name": "Analisis de datos"
            }
        ],
        "location": {
            "id": 4,
            "idCity": 4,
            "idRegion": 3,
            "idCountry": 2,
            "nameCity": "Los Angeles",
            "nameRegion": "California",
            "nameCountry": "USA"
        },
        "languages": [
            {
                "id": 7,
                "name": "Coreano",
                "code": "COR"
            },
            {
                "id": 6,
                "name": "Español",
                "code": "ES"
            }
        ],
        "education": [
            {
                "id": 5,
                "type": "Especialista",
                "title": "Especialista en bases de datos",
                "institution": "Uniandes",
                "dateInit": "2017-02-01",
                "dateEnd": "2017-12-01"
            },
            {
                "id": 6,
                "type": "Pregrado",
                "title": "Ingeniero de sistemas y computación",
                "institution": "Uniandes",
                "dateInit": "2012-02-01",
                "dateEnd": "2017-12-01"
            }
        ],
        "experiences": [
            {
                "id": 4,
                "job": "Desaroolador fullstack senior",
                "dateInit": "2017-02-01",
                "dateEnd": "2023-10-01",
                "company": "Uniandes",
                "description": "Desarrollo de software"
            }
        ]
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
