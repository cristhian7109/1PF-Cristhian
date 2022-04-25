import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarAlumnoComponent } from './crear-editar-alumno.component';

describe('CrearEditarAlumnoComponent', () => {
  let component: CrearEditarAlumnoComponent;
  let fixture: ComponentFixture<CrearEditarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditarAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
