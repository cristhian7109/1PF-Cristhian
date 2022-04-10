import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { CursosComponent } from './components/cursos/cursos.component';

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
