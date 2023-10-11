import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        MenuComponent,
        MenuItemComponent,
    ],
    exports: [MenuComponent]
})
export class MenuModule { }
