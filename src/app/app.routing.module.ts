import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
import { IndexComponent } from './features/index/index.component';
import { LoginComponent } from './shared/login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./core/core.module').then((m) => m.CoreModule)
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
