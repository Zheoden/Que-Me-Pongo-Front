import { Component } from '@angular/core';
import { UsuarioGlobal } from '../usuario/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent {

  constructor(private router: Router, private usuario: UsuarioGlobal) {}

  public logout(): void {
    this.usuario.logOut();
    this.router.navigate(['/login']);
  }
}
