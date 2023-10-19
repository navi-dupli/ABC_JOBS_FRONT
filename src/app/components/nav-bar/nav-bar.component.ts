import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import * as jose from "jose";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  user: any;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const decodeToken = jose.decodeJwt(currentUser.id_token);
    this.user = {
      name: decodeToken["name"],
      picture: decodeToken["picture"]
    }
  }

}
