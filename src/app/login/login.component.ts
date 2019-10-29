import { Usuario } from './../modelo/interfaces';
import { Component} from '@angular/core';
import { UserService } from '../api/userService';
import { Router } from '@angular/router';
import { UsuarioGlobal } from '../usuario/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent {
  public username = '';
  public password = '';
  public user: Usuario;
  public typePassword = 'password';
  public validate = false;
  public required = false;

  constructor(private userService: UserService, private router: Router, private usuario: UsuarioGlobal) {}

  public userChange() {
    this.required = Boolean(this.username && this.password);
  }

  public passChange() {
    this.required = Boolean(this.username && this.password);
  }

  public onLogin() {
    return this.userService
      .validateLogin(this.username, this.password)
      .then((user: Usuario) => {
        this.usuario.user = user;
        this.router.navigate(['/eventos']);
      })
      .catch(error => {
        this.validate = true;
        console.log(error);
      });
  }
}

