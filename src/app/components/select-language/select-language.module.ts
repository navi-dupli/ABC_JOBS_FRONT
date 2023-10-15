import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { SelectLanguageComponent } from './select-language.component';

@NgModule({
    imports: [
        CommonModule,
        DropdownModule
    ],
    declarations: [SelectLanguageComponent],
    exports: [SelectLanguageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SelectLanguageModule { }
