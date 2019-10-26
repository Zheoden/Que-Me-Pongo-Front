import { Component, Injectable, OnInit } from '@angular/core';
import { UserService } from '../api/userService';
import { Usuario } from '../modelo/interfaces';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from '../../authenticator/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})

export class UsuarioComponent implements OnInit {
  user: Usuario;
  constructor(private api: UserService, private route: ActivatedRoute, private authService: AuthService) {
    const user = this.route.snapshot.queryParamMap.get('username');
    const pass = this.route.snapshot.queryParamMap.get('password');
    this.api.getDataUsuario().then((usuario: Usuario) => {
      this.user = usuario;
    }).catch(error => {
      console.log(error);
    });
  }

  logOut() {
    this.authService.logout();
  }

  ngOnInit() {

  }
}
