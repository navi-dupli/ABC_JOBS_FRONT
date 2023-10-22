import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectComponent } from './create-project.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ProjectsService} from "../../services/projects/projects.service";
import {of, throwError} from "rxjs";
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from "@ngx-translate/core";

describe('CreateProjectComponent', () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;
  let mockProjectsService: Partial<ProjectsService>;

  const currentUser = { access_token: 'your-access-token' };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  beforeEach(() => {
    mockProjectsService = {
      registerProject: jest.fn()
    };
    TestBed.configureTestingModule({
      declarations: [CreateProjectComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
    })],
      providers: [
        { provide: ProjectsService, useValue: mockProjectsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls with default values', () => {
    expect(component.projectName?.value).toBe('');
    expect(component.projectDescription?.value).toBe('');
    expect(component.projectDate?.value).toBe('');
  });

  it('form should be invalid on creation', () => {
    expect(component.registerProject.valid).toBeFalsy();
  });

  it('should handle onSubmit', () => {
    component.onSubmit();

    expect(component.dataModal.displayModal).toBe(true);
    expect(component.dataModal.textModal).toBe('confirmacion_registrar_proyecto');
  });

  it('form should be valid when filled out correctly', () => {
    component.projectName?.setValue('Project Test');
    component.projectDescription?.setValue('Description for project test');
    component.projectDate?.setValue(new Date());

    expect(component.registerProject.valid).toBeTruthy();
  });

  it('should call registerProject method of ProjectsService when confirming modal', () => {
    component.projectName?.setValue('Project Test');
    component.projectDescription?.setValue('Description for project test');
    component.projectDate?.setValue(new Date());

    (mockProjectsService.registerProject as jest.Mock).mockReturnValue(of(true));

    component.confirmModal(true);

    expect(mockProjectsService.registerProject).toHaveBeenCalled();
    expect(component.dataModal.displayModal).toBe(true);
    expect(component.dataModal.textModal).toBe('proyecto_registrado_correctamente');
  });

  it('should display error modal when ProjectsService throws error', () => {
    const errorResponse = { error: { message: 'Error from server' } };

    (mockProjectsService.registerProject as jest.Mock).mockReturnValueOnce(throwError(() => errorResponse));

    component.confirmModal(true);

    expect(component.dataModal.textModal).toBe('Error from server');
    expect(component.dataModal.typeModal).toBe('error');
  });

  it('should handle confirmModal with event false', () => {
    expect(component.confirmModal(false)).toBeUndefined();
  });

  it('should handle closeModal with event true', () => {
    expect(component.closeModal(true)).toBeUndefined();
  });

});
