import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Store } from '@ngrx/store';
import { selectorUsuarioActivo } from './core/state/selectors/auth.selector';
import { Usuario } from './core/interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1PF-Ureta';
  other_content: boolean = false;
  usuarioActivo!: Usuario;

  constructor(public authService: AuthService, private store: Store){}
  ngOnInit() {
    this.store.select(selectorUsuarioActivo).subscribe((data) => {
      this.usuarioActivo = data?.usuarioActivo;
    });
  }
}
