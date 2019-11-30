import { Usuario } from '../modelo/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioGlobal {
    public user: Usuario;

    public setUserLoggedIn(user: Usuario) {
        this.user = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    public getUserLoggedIn(): Usuario {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    public logOut(): void {
        this.user = undefined;
        localStorage.removeItem('currentUser');
    }
}
