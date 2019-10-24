import {Component, Injectable, OnInit} from '@angular/core';
import {ApiGetwayService} from '../apiGetway/apiGetway.service';
import {Usuario} from '../modelo/interfaces';
import {ActivatedRoute, Route} from '@angular/router';
import {AuthService} from '../../authenticator/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})

export class UsuarioComponent implements OnInit {
  user: Usuario;
  constructor(private apiGetway: ApiGetwayService, private route: ActivatedRoute, private authService: AuthService) {
    const user = this.route.snapshot.queryParamMap.get('username');
    const pass = this.route.snapshot.queryParamMap.get('password');
    this.apiGetway.getDataUsuario(user, pass).toPromise().then((usuario: Usuario[]) => {
      this.user = usuario[0];
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
