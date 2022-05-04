import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AlumnosComponent } from './features/alumnos/alumnos.component';
import { AprobadosComponent } from './features/aprobados/aprobados.component';
import { ClasesComponent } from './features/clases/clases.component';
import { CrearEditarAlumnoComponent } from './features/alumnos/crear-editar-alumno/crear-editar-alumno.component';
import { MaterialModule } from './core/app.material.module';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './features/cursos/cursos.component';
import { AlumnoService } from './core/services/alumno.service';
import { EliminarAlumnoComponent } from './features/alumnos/eliminar-alumno/eliminar-alumno.component';
import { EliminarCursoComponent } from './features/cursos/eliminar-curso/eliminar-curso.component';
import { CrearEditarCursoComponent } from './features/cursos/crear-editar-curso/crear-editar-curso.component';
import { InscripcionComponent } from './features/inscripciones/inscripciones.component';
import { EliminarInscripcionComponent } from './features/inscripciones/eliminar-inscripcion/eliminar-inscripcion.component';
import { CrearEditarInscripcionComponent } from './features/inscripciones/crear-editar-inscripcion/crear-editar-inscripcion.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './shared/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AlumnosComponent,
    AprobadosComponent,
    ClasesComponent,
    EliminarAlumnoComponent,
    CrearEditarAlumnoComponent,
    EliminarCursoComponent,
    CrearEditarCursoComponent,
    InscripcionComponent,
    EliminarInscripcionComponent,
    CrearEditarInscripcionComponent,
    NopagefoundComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
