import { Component } from '@angular/core';
import jwt_decode from "jwt-decode";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  model: any[] = [];

  constructor(
    private authService: AuthService, 
    private router: Router,
    private translate: TranslateService) {
      console.log(this.translate.instant("registro_empresa"));
    
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'], scope: ['read:users', 'register:project', 'register:company', 'search:candidate'] }
        ]
      },
      {
        label: this.translate.instant("crear_proyecto"),
        items: [
          { label: this.translate.instant("crear_proyecto"), icon: 'pi pi-fw pi-id-card', routerLink: ['/crear-proyecto'], scope: ['register:project'] }
        ]
      },
      {
        label: this.translate.instant("pais"),
        items: [
          { label: this.translate.instant("pais"), icon: 'pi pi-fw pi-id-card', routerLink: ['/registrar-empresa'], scope: ['register:company'] }
        ]
      },
      {
        label: this.translate.instant("buscador"),
        items: [
          { label: this.translate.instant("buscador"), icon: 'pi pi-fw pi-id-card', routerLink: ['/buscar-candidato'], scope: ['search:candidate'] }
        ]
      }
    ]
     }

  ngOnInit() {
    this.filterMenu();
  }

  getScopes(){
    console.log(this.translate.instant("registro_empresa"));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const decodeToken = jwt_decode(currentUser.access_token);
    return decodeToken["permissions"] as string[];
  }

  filterMenu() {
    console.log(this.translate.instant("registro_empresa"));
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
