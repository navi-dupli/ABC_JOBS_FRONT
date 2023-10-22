import { Component } from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {CustomDialogModel} from "../../models/custom-dialog.model";
import {ProjectsService} from "../../services/projects/projects.service";
import { TranslateService } from '@ngx-translate/core';

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

  constructor(
    private projectService: ProjectsService,
    private translate: TranslateService
  ) {
    this.minDate = new Date();
    this.registerProject = new FormGroup({
      projectName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      projectDescription: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      projectDate: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const textModal = this.translate.instant("confirmacion_registrar_proyecto");
    this.dataModal = {
      displayModal: true,
      textModal: textModal,
      iconModal: 'pi-exclamation-triangle',
      typeModal: this.translate.instant("confirmacion")
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
      if (this.registerProject.valid) {
        this.projectService.registerProject({...this.registerProject.value, companyId: 1}).subscribe( {
          next: (result) => {
            if (result) {
              this.dataModal = {
                displayModal: true,
                textModal: this.translate.instant("proyecto_registrado_correctamente"),
                iconModal: 'pi-check',
                typeModal: this.translate.instant("exito")
              }
            }
          },
          error: (e) => {
            this.dataModal = {
              displayModal: true,
              textModal: e.error.message,
              iconModal: 'pi-times',
              typeModal: this.translate.instant("error")
            }
          }
        });
      } else {
        const textModal = this.translate.instant("campos_incompletos");
        this.dataModal = {
            displayModal: true,
            textModal: textModal,
            iconModal: 'pi-exclamation-circle',
            typeModal: 'Error'
        }
      }
    }
  }
}
