import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from '../../models/custom-dialog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {

  updateWorkExperiencie!: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  loading: boolean = false;
  constructor(
    private translate: TranslateService,
    private router: Router,
  ) {
    this.updateWorkExperiencie = new FormGroup({
      roleName: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl(''),
    }, this.validatedate);
  }

  validatedate(group: FormGroup) {
    if (group.get('dateEnd')?.value == "" || group.get('dateEnd')?.value == null) {
      group.get('dateEnd')?.setErrors(null);
      return null;
    }
    const invalid = group.get('dateStart').value > group.get('dateEnd').value;
    group.get('dateEnd')?.setErrors(invalid ? { 'invaliddate': true } : null);
    return invalid ? { 'invaliddate': true } : null;
  }

  ngOnInit() { }
  onSubmit() {
    const textModal = this.translate.instant("actualizar_experiencia_confirmacion");
    const typeModal = this.translate.instant("confirmacion");
    this.dataModal = {
      displayModal: true,
      textModal: textModal,
      iconModal: 'pi-exclamation-triangle',
      typeModal: typeModal
    }
  }
  confirmModal(event: boolean) {
    if (event) {
      if (this.updateWorkExperiencie.valid) {
        this.loading = true;
        let experiencie = {
          roleName: this.updateWorkExperiencie.get("roleName")?.value,
          companyName: this.updateWorkExperiencie.get("companyName")?.value,
          description: this.updateWorkExperiencie.get("description")?.value,
          dateStart: this.updateWorkExperiencie.get("dateStart")?.value,
          dateEnd: this.updateWorkExperiencie.get("dateEnd")?.value,
        }
        console.log(experiencie);
        this.loading = false;
        this.dataModal = {
          displayModal: true,
          textModal: this.translate.instant("actualizacion_experiencia_correctamente"),
          iconModal: 'pi-check',
          typeModal: this.translate.instant("exito")
        }
      }
    }
  }
  clearForm() {
    this.updateWorkExperiencie.reset();
  }
  closeModal(event: boolean) {
    this.loading = false;
    if (event) {
      this.router.navigate(['/completar-perfil']);
    }
  }
  get roleName() { return this.updateWorkExperiencie.get('roleName'); }
  get companyName() { return this.updateWorkExperiencie.get('companyName'); }
  get description() { return this.updateWorkExperiencie.get('description'); }
  get dateStart() { return this.updateWorkExperiencie.get('dateStart'); }
  get dateEnd() { return this.updateWorkExperiencie.get('dateEnd'); }
}
