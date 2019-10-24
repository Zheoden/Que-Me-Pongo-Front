import { Usuario } from './../modelo/interfaces';
import { Component, OnInit } from '@angular/core';
import { ApiGetwayService } from '../apiGetway/apiGetway.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../authenticator/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiGetwayService],
})

export class LoginComponent {
  public username = '';
  public password = '';
  public user: Usuario;
  public typePassword = 'text';
  public validate = false;
  public required = false;

  constructor(private apiGetwayService: ApiGetwayService,
              private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) {
    this.authService.logout();

  }

  userChange() {
    this.required = Boolean(this.username && this.password);
  }

  passChange() {
    this.required = Boolean(this.username && this.password);
  }

  onLogin() {
    return this.apiGetwayService.validateLogin(this.username, this.password).
    toPromise().then((user: Usuario) => {
    this.user = user;
    window.open('/home', '_self');
    }).catch(error => {
      this.validate = true;
      console.log(error);
    });
}

}
