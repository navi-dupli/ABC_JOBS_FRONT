import { Component } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service'
import * as moment from 'moment';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.scss']
})
export class ListAppointmentsComponent {
  totalAppointments: any = [];
  columns = [];
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
      this.totalAppointments = result
      for (let index = 0; index < this.totalAppointments.length; index++) {
        const element = result[index];
        this.totalAppointments[index].dateFormat = moment(element
          .date).utc().format("YYYY-MM-DD h:mm:ss a");
        this.totalAppointments[index].isDone = moment(element.date).isBefore(moment())
        this.totalAppointments[index].severity = result[index].isDone ? "info" : ""
        this.totalAppointments[index].participantName = result[index].candidateName
        if (currentUser.rol == "CANDIDATO") {
          result[index].participantName = this.totalAppointments[index].interviewerName
        } else if (currentUser.rol == "FUNCIONARIO_ABC") {
          result[index].participantName = this.totalAppointments[index].participantName
            + " - " + this.totalAppointments[index].interviewerName
        }
      }
      let participantTitle = "candidato"
      if (currentUser.rol == "CANDIDATO") {
        participantTitle = "entrevistador"
      } else if (currentUser.rol == "FUNCIONARIO_ABC") {
        participantTitle = "participantes"
      }
      this.generateColumns(participantTitle)
    })

  }

  generateColumns(participantTitle) {
    if (this.totalAppointments.length > 0) {
      this.columns.push(
        {
          header: "titulo",
          field: "title",
        },
        {
          header: "fecha_y_hora",
          field: "dateFormat",
        },
        {
          header: "descripcion",
          field: "description",
        },
        {
          header: participantTitle,
          field: "participantName",
        },
        {
          header: "estado",
          field: "state",
        },
        {
          header: "proceso",
          field: "processName",
        }
      )
    }
  }

}
