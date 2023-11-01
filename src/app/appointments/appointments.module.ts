import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TranslationModule } from '../components/translation/translation.module';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [ListAppointmentsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TagModule,
    TableModule,
    TranslationModule,
  ],
  exports: [ListAppointmentsComponent]
})
export class AppointmentsModule { }
