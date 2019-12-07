import { Component, OnInit } from '@angular/core';
import { UsuarioGlobal } from '../usuario/user';
import { Router } from '@angular/router';
import { UserService } from '../api/userService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit {

  constructor(private router: Router, private usuario: UsuarioGlobal, private userService: UserService) {}

  public async ngOnInit() {
    this.userService.getColores().then( (response) => this.usuario.setColores(response));
    this.userService.getTipoPrendas().then( (response) => this.usuario.setTipoPrenda(response));
    this.userService.getMateriales().then( (response) => this.usuario.setMateriales(response));
    if (!this.usuario.getUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  public logout(): void {
    this.usuario.logOut();
    this.router.navigate(['/login']);
  }
}
