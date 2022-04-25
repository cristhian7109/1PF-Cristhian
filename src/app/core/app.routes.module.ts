import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../features/alumnos/alumnos.component';
import { AprobadosComponent } from '../features/aprobados/aprobados.component';
import { ClasesComponent } from '../features/clases/clases.component';
import { ContenidoComponent } from '../features/contenido/contenido.component';
import { CursosComponent } from '../features/cursos/cursos.component';

const routes: Routes = [
  {
    path: '',
    component: ContenidoComponent 
  },
  {
    path: 'alumnos',
    component: AlumnosComponent
  },
  {
    path: 'alumnos_aprobados',
    component: AprobadosComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'clases',
    component: ClasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
