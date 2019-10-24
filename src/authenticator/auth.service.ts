import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtResponseI} from './JwtResponseI';
import {tap} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {Usuario} from '../app/modelo/interfaces';
import {config} from '../config';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  token: string;

  constructor(private http: HttpClient) {

  }


  login(jwtResp: JwtResponseI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${config.loginUrl}`,
      jwtResp).pipe(tap(
      (res: JwtResponseI) => {
        if (res) {
          // guardar token
          this.saveToken(res.dataUser.accesToken, res.dataUser.expiresTime);
        }
      })
    );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }

}
