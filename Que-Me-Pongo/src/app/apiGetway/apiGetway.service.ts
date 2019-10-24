import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Usuario } from '../modelo/interfaces';
import { Injectable } from '@angular/core';
import { config } from '../../config';

@Injectable()
export class ApiGetwayService {
  constructor(private http: HttpClient) {
  }

  validateLogin(username: string, password: string) {
    const params = new HttpParams();
    params.set('username', username);
    params.set('password', password);
    return this.http.get(`${config.apiUrl}/users/authenticate`, { params: { username, password } });
  }

  getDataUsuarios() {
    return this.http.get<Usuario[]>(`${config.userUrl}`);
  }

  getDataUsuario(username: string, password: string) {
    const params = new HttpParams();
    params.set('username', username);
    params.set('password', password);
    return this.http.get<Usuario[]>(`${config.userUrl}`, { params: { username, password } });
  }
}
