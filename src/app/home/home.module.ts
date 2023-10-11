import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuModule } from '../components/menu/menu.module';
import { NavBarModule } from '../components/nav-bar/nav-bar.module';
import { CreateProjectModule } from '../projects/create-project/create-project.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MenuModule,
        NavBarModule,
        CreateProjectModule
    ],
    declarations: [
        HomeComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomeModule { }
