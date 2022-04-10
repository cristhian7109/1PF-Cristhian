import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { AppRoutingModule } from './app.routes.module';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ClasesComponent } from './components/clases/clases.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CrearEditarAlumnoComponent } from './components/alumnos/crear-editar-alumno/crear-editar-alumno.component';
import { EliminarAlumnoComponent } from './components/alumnos/eliminar-alumno/eliminar-alumno.component';
import { TitlesDirective } from './titles.directive';
import { ConversorPipe } from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    ToolbarComponent,
    NavbarComponent,
    LoginComponent,
    AlumnosComponent,
    ClasesComponent,
    CursosComponent,
    EliminarAlumnoComponent,
    CrearEditarAlumnoComponent,
    TitlesDirective,
    ConversorPipe
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
