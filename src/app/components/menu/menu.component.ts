import { Component } from '@angular/core';
import jwt_decode from "jwt-decode";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  model: any[] = [
    {
      label: 'Home',
      items: [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'], scope: ['read:users'] }
      ]
    },
    {
      label: 'Crear proyecto',
      items: [
        { label: 'Crear proyecto', icon: 'pi pi-fw pi-id-card', routerLink: ['/crear-proyecto'], scope: ['register:project'] }
      ]
    },
    {
      label: 'Registrar empresa',
      items: [
        { label: 'Registrar empresa', icon: 'pi pi-fw pi-id-card', routerLink: ['/registrar-empresa'], scope: ['register:company'] }
      ]
    }
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.filterMenu();
  }

  getScopes(){
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const decodeToken = jwt_decode(currentUser.access_token);
    return decodeToken["permissions"] as string[];
  }

  filterMenu() {
    const permissions = this.getScopes();
    this.model = this.model.map((item) => {
      if (item.items) {
        item.items = item.items.map((subItem) => {
           subItem.scope = subItem.scope.filter((scope) => {
            return permissions.includes(scope);
          });
          return subItem.scope.length > 0 ? subItem : null;
        });
        item.items = item.items.filter((subItem) => {return subItem !== null});
        return item;
      } else {
       return item.scope.find((scope) => {
         return permissions.includes(scope);
       }) ? item : null;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/iniciar-sesion']);
  }
}
