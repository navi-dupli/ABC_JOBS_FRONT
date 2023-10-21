import { Component, OnInit } from '@angular/core';
import { AbilityModel, EducationTypeModel, ExperienceModel, LanguageModel } from '../../../app/models/commons';
import { CountriesModel } from '../../../app/models/companies';
import { CommonsService } from '../../../app/services/commons/commons.service';
import { LocationService } from '../../../app/services/location/location.service';

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.scss']
})
export class SearchCandidateComponent implements OnInit {

  countriesOptions: CountriesModel[];
  abilityOptions: AbilityModel[];
  languageOptions: LanguageModel[];
  experienceOptions: ExperienceModel[];
  educationTypeOptions: EducationTypeModel[];
  selectedMulti: any[] = [];
  selectedMulti2: any[] = [];
  selectedMulti3: any[] = [];
  selectedMulti4: any[] = [];
  selectedMulti5: any[] = [];

  constructor(
    private locationService: LocationService,
    private commonsService: CommonsService) {

  }
  
  ngOnInit(): void {
    this.locationService.getCountries().subscribe(result => {
      this.countriesOptions = result;
    });

    this.commonsService.getAbilities().subscribe(result => {
      this.abilityOptions = result;
    });

    this.commonsService.getLanguages().subscribe(result => {
      this.languageOptions = result;
    });

    this.experienceOptions = [
      {name: "0 a 1 año"},
      {name: "1 a 3 años"},
      {name: "3 a 5 años"},
      {name: "+ 5 años"}
    ]

    this.commonsService.getEducationType().subscribe(result => {
      this.educationTypeOptions = result;
    });
  }

}
