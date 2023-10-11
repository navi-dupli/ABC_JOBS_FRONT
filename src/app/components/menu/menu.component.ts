import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  model: any[] = [];

  constructor() { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'Crear proyecto',
        items: [
          { label: 'Crear proyecto', icon: 'pi pi-fw pi-id-card', routerLink: ['/crear-proyecto'] }
        ]
      }
    ];
  }
}
