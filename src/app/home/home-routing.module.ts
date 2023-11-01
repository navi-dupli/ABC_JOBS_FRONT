import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchCandidateComponent } from '../candidate/search-candidate/search-candidate.component';
import { RegisterCompanyComponent } from '../companies/register-company/register-company.component';
import { CreateProjectComponent } from '../projects/create-project/create-project.component';
import { AddCandidateTeamComponent } from '../teams/add-candidate-team/add-candidate-team.component';
import { HomeComponent } from './home.component';
import { RegisterTechnicalTestComponent } from '../test/register-technical-test/register-technical-test.component';
import { ListAppointmentsComponent } from '../appointments/list-appointments/list-appointments.component';

@NgModule({
	imports: [RouterModule.forChild([
		{
			path: '', component: HomeComponent,
			children: [
				{ path: 'crear-proyecto', component: CreateProjectComponent },
				{ path: 'registrar-empresa', component: RegisterCompanyComponent },
				{ path: 'registar-resultados-prueba-tecnica', component: RegisterTechnicalTestComponent },
				{ path: 'buscar-candidato', component: SearchCandidateComponent },
				{ path: 'asignar-candidato-equipo', component: AddCandidateTeamComponent },
				{ path: 'listar-citas', component: ListAppointmentsComponent }
			]
		},
	])],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
