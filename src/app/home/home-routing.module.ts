import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateProjectComponent } from '../projects/create-project/create-project.component';
import { HomeComponent } from './home.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: HomeComponent,
			children: [
				{ path: 'crear-proyecto', component: CreateProjectComponent }
			] 
		},
	])],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
