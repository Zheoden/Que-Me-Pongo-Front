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
    if (!this.usuario.getUserLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.usuario.setUserLoggedIn(await this.userService.getUserById(this.usuario.getUserLoggedIn().id));
    }
  }

  public logout(): void {
    this.usuario.logOut();
    this.router.navigate(['/login']);
  }
}
