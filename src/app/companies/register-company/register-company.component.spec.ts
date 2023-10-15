import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CompaniesService } from '../../../app/services/companies/companies.service';

import { RegisterCompanyComponent } from './register-company.component';

describe('RegisterCompanyComponent', () => {
  let component: RegisterCompanyComponent;
  let fixture: ComponentFixture<RegisterCompanyComponent>;
  let companiesService: CompaniesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ RegisterCompanyComponent ],
      providers: [CompaniesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCompanyComponent);
    companiesService = TestBed.inject(CompaniesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form', () => {

    const registerCompanyValue = {
      "companyName": "Mi Empresa",
      "uniqueIdentification": "123456789",
      "businessActivity": "Servicios de Tecnología",
      "companyEmail": "contacto@miempresa.com",
      "representativeName": "Juan Pérez",
      "representativeEmail": "juan@miempresa.com",
      "representativePassword": "contraseña123",
      "phoneNumber": "+1234567890",
      "country": 1,   
      "region": 2,  
      "city": 3,     
      "address": "123 Calle Principal, Suite 4A"
    };
    jest.spyOn(companiesService, 'registerCompany').mockReturnValue(of(registerCompanyValue)); 
    
    component.registerCompany.setValue(registerCompanyValue);

    component.onSubmit();

    expect(component.onSubmit()).toBeUndefined();
  });

  it('should handle error when submitting the form', () => {
    const companiesService = TestBed.inject(CompaniesService); // Mock service instance

    const loginSpy = jest.spyOn(companiesService, 'registerCompany').mockReturnValue(throwError(() => 'Error en la autenticación'));

    // Set form values
    component.registerCompany.setValue({ 
      "companyName": "Mi Empresa",
      "uniqueIdentification": "123456789",
      "businessActivity": "Servicios de Tecnología",
      "companyEmail": "contacto@miempresa.com",
      "representativeName": "Juan Pérez",
      "representativeEmail": "juan@miempresa.com",
      "representativePassword": "contraseña123",
      "phoneNumber": "+1234567890",
      "country": 1,   
      "region": 2,  
      "city": 3,     
      "address": "123 Calle Principal, Suite 4A"
    });

    component.onSubmit();
    expect(component.dataModal.displayModal).toBe(true);
  });
});
