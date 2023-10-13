import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomDialogModel } from '../../../app/models/custom-dialog.model';
import { AuthService } from '../../../app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    login: FormGroup;
    valCheck: string[] = ['remember'];
    dataModal: CustomDialogModel = {
        displayModal: false
    }

    constructor(
        private authService: AuthService,
        private router: Router) {
    }

    ngOnInit() {
        this.login = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)])
        });
    }

    onSubmit() {
        this.authService.login(this.email.value, this.password.value).subscribe({
            next: (result) => {
                if (result) {
                    localStorage.setItem('currentUser', JSON.stringify(result));
                    this.router.navigate(['/']);
                }
            },
            error: (e) => {
                this.dataModal = {
                    displayModal: true,
                    textModal: 'Hubo un error al iniciar sesión',
                    iconModal: 'pi-exclamation-circle',
                    typeModal: 'Error'
                }
            }
        });
    }

    get email() { return this.login.get('email'); }
    get password() { return this.login.get('password'); }
}
