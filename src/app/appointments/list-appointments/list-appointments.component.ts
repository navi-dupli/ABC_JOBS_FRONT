import { Component } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments/appointments.service';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.scss']
})
export class ListAppointmentsComponent {
  totalAppointments: any = [];
  cols = [];
  constructor(private appointmentsService: AppointmentsService) { }

  ngOnInit() {
    this.getListAppointments()
  }

  getListAppointments() {
    const local = localStorage.getItem('currentUser');
    let currentUser: any;
    if (local !== null) {
      currentUser = JSON.parse(local);
    }
    this.appointmentsService.getAppointmentsUser(currentUser.id).subscribe(result => {
      console.log(result)
      this.totalAppointments = result
    })

  }

  generateColumns() {
    if (this.totalAppointments.length > 0) {
      this.cols.push(
        {
          field: "titulo",
          header: "description",
        },
        {
          field: "fecha_y_hora",
          header: "description",
        },
        {
          field: "descripcion",
          header: "description",
        },
        {
          field: "candidato",
          header: "description",
        },
        {
          field: "estado",
          header: "description",
        },
        {
          field: "proceso",
          header: "processName",
        }
      )

    }
  }

}
