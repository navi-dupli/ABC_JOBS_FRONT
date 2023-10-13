import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialogComponent } from './custom-dialog.component';

describe('CustomDialogComponent', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    component.dataModal = {
      displayModal: false,
      textModal: 'Hubo un error al iniciar sesión',
      iconModal: 'pi-exclamation-circle',
      typeModal: 'Error'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
