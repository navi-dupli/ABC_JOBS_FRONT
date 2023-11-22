import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from 'src/app/models/custom-dialog.model';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {

  candidate: any;
  langugesOptions: any = [
    {
      value: "Español"
    },
    {
      value: "Inlges"
    },
  ]
  profileSkills!: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  loading = false;
  constructor(
    private translate: TranslateService,
    private profileService: ProfileService
  ) {
    const local = localStorage.getItem('currentUser');
    let currentUser: any;
    if (local !== null) {
      currentUser = JSON.parse(local);
    }
    this.profileService.getCandidate(currentUser.id).subscribe(result => {
      console.log(result);
      this.candidate = result;
    })
    this.profileSkills = new FormGroup({
      languges: new FormControl('', [Validators.required]),
      skils: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const textModal = this.translate.instant("actualizar_habilidades_confirmacion");
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
      if (this.profileSkills.valid) {
        this.loading = true;
        let skilsAndLanguges = {
          languges: this.profileSkills.get("languges")?.value,
          skils: this.profileSkills.get("skils")?.value,
        }
        console.log(skilsAndLanguges);
        this.loading = false;
        this.dataModal = {
          displayModal: true,
          textModal: this.translate.instant("actualizacion_habilidades_correctamente"),
          iconModal: 'pi-check',
          typeModal: this.translate.instant("exito")
        }
      }
    }
  }
  clearForm() {
    this.profileSkills.reset();
  }
  closeModal(event: boolean) {
    this.loading = false;
    if (event) {
      this.clearForm();
    }
  }
  ngOnInit() {
  }

  get languges() { return this.profileSkills.get('languges'); }
  get skils() { return this.profileSkills.get('skils'); }
}
