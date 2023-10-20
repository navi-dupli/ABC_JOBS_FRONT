import { Component } from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {CustomDialogModel} from "../../models/custom-dialog.model";
import {ProjectsService} from "../../services/projects/projects.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  minDate: Date | undefined;
  registerProject: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }

  constructor(private projectService: ProjectsService) {
    this.minDate = new Date();
    this.registerProject = new FormGroup({
      projectName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      projectDescription: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      projectDate: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.dataModal = {
      displayModal: true,
      textModal: '¿Desea registrar un nuevo proyecto?',
      iconModal: 'pi-exclamation-triangle',
      typeModal: 'Confirmación'
    }
  }

  get projectName() { return this.registerProject.get('projectName'); }
  get projectDescription() { return this.registerProject.get('projectDescription'); }
  get projectDate() { return this.registerProject.get('projectDate'); }

  clearForm() {
    this.registerProject.reset();
  }

  closeModal(event: boolean) {
    if (event) {
      this.clearForm();
    }
  }

  confirmModal(event: boolean) {
    if (event) {
      this.projectService.registerProject({...this.registerProject.value, companyId: 1}).subscribe( {
        next: (result) => {
          if (result) {
            this.dataModal = {
              displayModal: true,
              textModal: 'El proyecto se ha registrado correctamente',
              iconModal: 'pi-check',
              typeModal: 'Éxito'
            }
          }
        },
        error: (e) => {
          this.dataModal = {
            displayModal: true,
            textModal: e.error.message,
            iconModal: 'pi-times',
            typeModal: 'Error'
          }
        }
      });
    }
  }
}
