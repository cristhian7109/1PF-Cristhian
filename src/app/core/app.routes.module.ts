import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../features/alumnos/alumnos.component';
import { AprobadosComponent } from '../features/aprobados/aprobados.component';
import { IndexComponent } from '../features/index/index.component';
import { CursosComponent } from '../features/cursos/cursos.component';
import { InscripcionComponent } from '../features/inscripciones/inscripciones.component';
import { LoginComponent } from '../shared/login/login.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'alumnos',
    component: AlumnosComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'alumnos_aprobados',
    component: AprobadosComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'cursos',
    component: CursosComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'inscripciones',
    component: InscripcionComponent,
    canActivate: [LoginGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent, 
    pathMatch: 'full' 
  },
  { 
    path: '' ,
    component: IndexComponent,
    canActivate: [LoginGuard]
  },
  { 
    path: '**', 
    component: NopagefoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
