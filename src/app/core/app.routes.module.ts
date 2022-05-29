import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobadosComponent } from '../features/aprobados/aprobados.component';
import { IndexComponent } from '../features/index/index.component';
import { CursosComponent } from '../features/cursos/cursos.component';
import { InscripcionComponent } from '../features/inscripciones/inscripciones.component';
import { LoginComponent } from '../shared/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { AlumnosComponent } from '../features/alumnos/alumnos.component';
import { ContenidoComponent } from '../features/contenido/contenido.component';

const routes: Routes = [
  {
    path: 'alumnos',
    children: [
      {path: '', canActivate: [LoginGuard], component: AlumnosComponent}
    ]
  },
  {
    path: 'alumnos_aprobados',
    children: [
      {path: '', canActivate: [LoginGuard], component: AprobadosComponent}
    ]
  },
  {
    path: 'cursos',
    children: [
      {path: '', canActivate: [LoginGuard], component: CursosComponent}
    ]
  },
  {
    path: 'inscripciones',
    children: [
      {path: '', canActivate: [LoginGuard], component: InscripcionComponent}
    ]
  },
  {
    path: 'cursosXAlumno',
    children: [
      {path: '', canActivate: [LoginGuard], component: ContenidoComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
