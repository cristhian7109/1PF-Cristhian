import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './app.material.module';
import { HttpClientModule } from '@angular/common/http';;
import { AppRoutingModule } from './app.routes.module';
import { AlumnoService } from './services/alumno.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [AppRoutingModule, MaterialModule],
  providers: [AlumnoService],
})
export class CoreModule {}
