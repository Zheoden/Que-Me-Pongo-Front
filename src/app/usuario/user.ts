import { Usuario, Guardarropa } from '../modelo/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioGlobal {
    public user: Usuario;

    public setUserLoggedIn(user: Usuario) {
        this.user = user;
        this.updateLocalStorage()
    }

    public getUserLoggedIn(): Usuario {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    public updateGuardarropa(index: number, guardarropa: Guardarropa) {
        this.user.guardarropas[index] = guardarropa;
        this.updateLocalStorage();
    }

    public logOut(): void {
        this.user = undefined;
        localStorage.removeItem('currentUser');
    }

    private updateLocalStorage() {
        localStorage.removeItem('currentUser');
        localStorage.setItem('currentUser', JSON.stringify(this.user));
    }
}
