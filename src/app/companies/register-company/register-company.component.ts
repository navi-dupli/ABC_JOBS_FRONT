import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../../../app/services/location/location.service';
import { CityModel, CountriesModel, RegionModel } from '../../../app/models/companies';
import { CustomDialogModel } from '../../../app/models/custom-dialog.model';
import { CompaniesService } from '../../../app/services/companies/companies.service';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {

  registerCompany: FormGroup;
  countriesOptions: CountriesModel[];
  regionOptions: RegionModel[];
  cityOptions: CityModel[];
  dataModal: CustomDialogModel = {
    displayModal: false
  }

  constructor(
    private companyService: CompaniesService,
    private router: Router,
    private locationService: LocationService) { 
    this.registerCompany = new FormGroup({
      companyName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      uniqueIdentification: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      businessActivity: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      companyEmail: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      representativeName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      representativeEmail: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      representativePassword: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$._ %^&*-]).{8,}$")]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      country: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.locationService.getCountries().subscribe(result => {
      this.countriesOptions = result;
    });
    
  }
  onSubmit() {
    this.dataModal = {
      displayModal: true,
      textModal: '¿Desea registrar una nueva empresa?',
      iconModal: 'pi-exclamation-triangle',
      typeModal: 'Confirmación'
    }
  }

  confirmModal(event: boolean) {
    if (event) {
      this.companyService.registerCompany(this.registerCompany.value).subscribe({
        next: (result) => {
          if (result) {
            this.dataModal = {
              displayModal: true,
              textModal: 'Empresa registrada con éxito',
              iconModal: 'pi-check',
              typeModal: 'Éxito'
            }
          }
        },
        error: (e) => {
          console.log(e)
          if (e.status === 400) {
            this.dataModal = {
              displayModal: true,
              textModal: e.error.message,
              iconModal: 'pi-exclamation-circle',
              typeModal: 'Error'
            }
          } else {
            this.dataModal = {
              displayModal: true,
              textModal: 'Hubo un error al registrar la empresa',
              iconModal: 'pi-exclamation-circle',
              typeModal: 'Error'
            }
          }
        }
      });
    }
  }

  closeModal(event: boolean) {
    if (event) {
      this.clearForm();
    }
  }

  onChangeCountry(country: number) {
    this.locationService.getRegions(country).subscribe(result => {
      this.regionOptions = result;
    })
  }

  onChangeRegion(region: number) {
    this.locationService.getCity(region).subscribe(result => {
      this.cityOptions = result;
    })
  }

  clearForm() {
    this.registerCompany.reset();
  }

  get companyName() { return this.registerCompany.get('companyName'); }
  get uniqueIdentification() { return this.registerCompany.get('uniqueIdentification'); }
  get businessActivity() { return this.registerCompany.get('businessActivity'); }
  get companyEmail() { return this.registerCompany.get('companyEmail'); }
  get representativeName() { return this.registerCompany.get('representativeName'); }
  get representativeEmail() { return this.registerCompany.get('representativeEmail'); }
  get representativePassword() { return this.registerCompany.get('representativePassword'); }
  get phoneNumber() { return this.registerCompany.get('phoneNumber'); }
  get country() { return this.registerCompany.get('country'); }
  get region() { return this.registerCompany.get('region'); }
  get city() { return this.registerCompany.get('city'); }
  get address() { return this.registerCompany.get('address'); }

}
