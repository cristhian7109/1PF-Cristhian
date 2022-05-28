import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario Login invalido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() //TODO: <---------------

    const email = app.formGroup.controls['usuario']
    email.setValue('admin')

    expect(app.formGroup.invalid).toBeTrue(); //TODO: ✔
  });

  it('Formulario Login valido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let email = app.formGroup.controls['usuario']
    let password = app.formGroup.controls['contrasena']

    email.setValue('admin')
    password.setValue('admin123')

    expect(app.formGroup.invalid).toBeFalse(); //TODO: ✔
  });
});
