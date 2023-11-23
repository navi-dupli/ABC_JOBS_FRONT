import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from '../../models/custom-dialog.model';
import { CommonsService } from '../../services/commons/commons.service';
import { ProfileService } from '../../services/profile/profile.service';
import { AbilityModel, LanguageModel } from '../../models/commons';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {

  candidate: any;
  abilityOptions!: AbilityModel[];
  languageOptions!: LanguageModel[];
  profileSkills!: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  loading = false;
  currentUser: any;
  constructor(
    private translate: TranslateService,
    private profileService: ProfileService,
    private commonsService: CommonsService,
  ) {
    
    this.profileSkills = new FormGroup({
      languges: new FormControl(''),
      skils: new FormControl(''),
    });
  }

  updateCandidate() {
    const local = localStorage.getItem('currentUser');
    if (local !== null) {
      this.currentUser = JSON.parse(local);
    }
    this.profileService.getCandidate(this.currentUser.id).subscribe(result => {
      this.candidate = result;
      this.getLanguges();
      this.getSkils();
    })
  }
  getLanguges() {
    let lenguges: any = [];
    this.candidate.languages.forEach((element: any) => {
      lenguges.push(element.code);
    })
    this.profileSkills.get("languges")?.setValue(lenguges);
  }

  getSkils() {
    let skils: any = [];
    this.candidate.skills.forEach((element: any) => {
      skils.push(element.id);
    })
    this.profileSkills.get("skils")?.setValue(skils);
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
      this.updateCandidate()
    }
  }
  ngOnInit() {
    this.commonsService.getAbilities().subscribe(result => {
      this.abilityOptions = result;
      this.updateCandidate()
    });

    this.commonsService.getLanguages().subscribe(result => {
      this.languageOptions = result;
    });
  }

  get languges() { return this.profileSkills.get('languges'); }
  get skils() { return this.profileSkills.get('skils'); }
}
