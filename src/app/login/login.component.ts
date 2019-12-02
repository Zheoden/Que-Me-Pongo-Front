import { Usuario } from './../modelo/interfaces';
import { Component, OnInit} from '@angular/core';
import { UserService } from '../api/userService';
import { Router } from '@angular/router';
import { UsuarioGlobal } from '../usuario/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  public user: Usuario;
  public typePassword = 'password';
  public validate = false;
  public required = false;
  public validateEmail: boolean;
  public loading = false;

  constructor(private userService: UserService, private router: Router, private usuario: UsuarioGlobal) {}

  public async ngOnInit() {
    if (this.usuario.getUserLoggedIn()) {
      this.usuario.setUserLoggedIn(await this.userService.getUserById(this.usuario.getUserLoggedIn().id));
      this.router.navigate(['/eventos']);
    }
  }

  public userChange() {
    if (this.username.includes('@')) {
      const regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
      this.validateEmail = !regexp.test(this.username);
      this.required = Boolean(this.validateEmail);
    } else {
      this.validateEmail = false;
    }
    this.required = Boolean(this.username && this.password);
  }

  public passChange() {
    this.required = Boolean(this.username && this.password);
  }

  public onLogin() {
    this.loading = true;
    return this.userService
      .validateLogin(this.username, this.password)
      .then((user: Usuario) => {
        this.loading = false;
        this.usuario.setUserLoggedIn(user);
        this.router.navigate(['/eventos']);
      })
      .catch(error => {
        this.loading = false;
        this.validate = true;
        console.log(error);
      });
  }

  public toggleEye() {
    this.typePassword = this.typePassword === 'password' ? 'text' : 'password';
  }
}

