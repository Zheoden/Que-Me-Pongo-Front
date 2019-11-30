import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/interfaces';
import { UsuarioGlobal } from './user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})

export class UsuarioComponent implements OnInit {
  user: Usuario;

  constructor(private usuario: UsuarioGlobal) {}

  ngOnInit() {
    this.user = this.usuario.getUserLoggedIn();
  }
}
