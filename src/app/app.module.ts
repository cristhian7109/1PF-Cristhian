import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AlumnosComponent } from './features/alumnos/alumnos.component';
import { AprobadosComponent } from './features/aprobados/aprobados.component';
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
import { LoginComponent } from './shared/login/login.component';
import { IndexComponent } from './features/index/index.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './core/state/app.state';
import {appEffects} from "./core/state/app.effect";
import { environment } from '../environments/environment';
import { ContenidoComponent } from './features/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AlumnosComponent,
    AprobadosComponent,
    IndexComponent,
    EliminarAlumnoComponent,
    CrearEditarAlumnoComponent,
    EliminarCursoComponent,
    CrearEditarCursoComponent,
    InscripcionComponent,
    EliminarInscripcionComponent,
    CrearEditarInscripcionComponent,
    NopagefoundComponent,
    LoginComponent,
    ContenidoComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Cargar y cursos cargados en la lista',
    }),
    EffectsModule.forRoot(appEffects),
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
