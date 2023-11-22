import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from 'src/app/models/custom-dialog.model';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.scss'],
})
export class UpdateEducationComponent implements OnInit {
  updateEducation!: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  loading: boolean = false;
  uploadedFiles: any[] = [];
  multiple: boolean | undefined;
  constructor(
    private translate: TranslateService,
    private router: Router,
  ) {
    this.multiple = true;
    this.updateEducation = new FormGroup({
      tittleName: new FormControl('', [Validators.required]),
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() { }
  onSubmit() {
    const textModal = this.translate.instant("actualizar_educacion_confirmacion");
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
      if (this.updateEducation.valid) {
        this.loading = true;
        let education = {
          tittleName: this.updateEducation.get("tittleName")?.value,
          dateStart: this.updateEducation.get("dateStart")?.value,
          dateEnd: this.updateEducation.get("dateEnd")?.value,
        }
        console.log(education);
        this.loading = false;
        this.dataModal = {
          displayModal: true,
          textModal: this.translate.instant("actualizacion_educacion_correctamente"),
          iconModal: 'pi-check',
          typeModal: this.translate.instant("exito")
        }
      }
    }
  }
  clearForm() {
    this.updateEducation.reset();
  }
  closeModal(event: boolean) {
    this.loading = false;
    if (event) {
      this.router.navigate(['/completar-perfil']);
    }
  }

  get tittleName() { return this.updateEducation.get('tittleName'); }
  get dateStart() { return this.updateEducation.get('dateStart'); }
  get dateEnd() { return this.updateEducation.get('dateEnd'); }
}
