import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/app.material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { AppRoutingModule } from '../core/app.routes.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    ConversorPipe,
  ],
  imports: [CommonModule, AppRoutingModule, MaterialModule,ReactiveFormsModule],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    ConversorPipe,
  ],
})
export class SharedModule {}
