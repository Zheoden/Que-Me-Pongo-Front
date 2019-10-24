import { Usuario } from './../modelo/interfaces';
import { Component} from '@angular/core';
import { ApiGetwayService } from '../apiGetway/apiGetway.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiGetwayService]
})


export class LoginComponent {
  public username = '';
  public password = '';
  public user: Usuario;
  public typePassword = 'text';
  public validate = false;
  public required = false;

  constructor(private apiGetwayService: ApiGetwayService, private router: Router) {}

  userChange() {
    this.required = Boolean(this.username && this.password);
  }

  passChange() {
    this.required = Boolean(this.username && this.password);
  }

  onLogin() {
    return this.apiGetwayService
      .validateLogin(this.username, this.password)
      .toPromise()
      .then((user: Usuario) => {
        this.user = user;
        this.router.navigate(['/home'], {
          state: { user }
        });
      })
      .catch(error => {
        this.validate = true;
        console.log(error);
      });
  }
}

