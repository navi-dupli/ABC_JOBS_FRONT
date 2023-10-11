import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CreateProjectComponent
    ],
    exports: [
        CreateProjectComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CreateProjectModule { }
