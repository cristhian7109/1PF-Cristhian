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
import { ContenidoComponent } from './features/contenido/contenido.component';
import { AlumnoService } from './core/services/alumno.service';
import { EliminarAlumnoComponent } from './features/alumnos/eliminar-alumno/eliminar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ContenidoComponent,
    AlumnosComponent,
    AprobadosComponent,
    ClasesComponent,
    EliminarAlumnoComponent,
    CrearEditarAlumnoComponent,
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
