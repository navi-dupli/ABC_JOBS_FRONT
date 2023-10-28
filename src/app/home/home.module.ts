import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuModule } from '../components/menu/menu.module';
import { NavBarModule } from '../components/nav-bar/nav-bar.module';
import { CreateProjectModule } from '../projects/create-project/create-project.module';
import { RegisterCompanyModule } from '../companies/register-company/register-company.module';
import { SearchCandidateModule } from '../candidate/search-candidate/search-candidate.module';
import { RegisterTechnicalTestModule } from '../test/register-technical-test/register-technical-test.module';
import { AddCandidateTeamModule } from '../teams/add-candidate-team/add-candidate-team.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MenuModule,
        NavBarModule,
        CreateProjectModule,
        RegisterCompanyModule,
        SearchCandidateModule,
        AddCandidateTeamModule,
        RegisterTechnicalTestModule
    ],
    declarations: [
        HomeComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomeModule { }
