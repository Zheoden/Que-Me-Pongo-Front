import { Usuario, Guardarropa, Data } from '../modelo/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioGlobal {
    public user: Usuario;
    public colores: Data[];
    public tipoPrenda: Data[];
    public materiales: Data[];

    public setUserLoggedIn(user: Usuario) {
        this.user = user;
        this.updateLocalStorage();
    }

    public getUserLoggedIn(): Usuario {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        return this.user;
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


    /* ENUMS */

    public getColores(): Data[] {
        this.colores = JSON.parse(localStorage.getItem('colores'));
        return this.colores;
    }

    public getTipoPrenda(): Data[] {
        this.tipoPrenda = JSON.parse(localStorage.getItem('tipoPrenda'));
        return this.tipoPrenda;
    }

    public getMateriales(): Data[] {
        this.materiales = JSON.parse(localStorage.getItem('materiales'));
        return this.materiales;
    }


    public setColores(colores: Data[]) {
        this.colores = colores;
        this.updateColores();
    }

    public setTipoPrenda(tipoPrenda: Data[]) {
        this.tipoPrenda = tipoPrenda;
        this.updateTipoPrenda();
    }

    public setMateriales(materiales: Data[]) {
        this.materiales = materiales;
        this.updateMateriales();
    }

    private updateColores() {
        localStorage.removeItem('colores');
        localStorage.setItem('colores', JSON.stringify(this.colores));
    }

    private updateTipoPrenda() {
        localStorage.removeItem('tipoPrenda');
        localStorage.setItem('tipoPrenda', JSON.stringify(this.tipoPrenda));
    }

    private updateMateriales() {
        localStorage.removeItem('materiales');
        localStorage.setItem('materiales', JSON.stringify(this.materiales));
    }
}
