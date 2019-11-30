import { ApiService } from './apiService';
import { Usuario, Guardarropa, Prenda } from '../modelo/interfaces';
import { Injectable } from '@angular/core';
import { UsuarioGlobal } from '../usuario/user';

@Injectable()
export class GuardarropaService extends ApiService {
    constructor(private usuario: UsuarioGlobal) {
        super();
    }

    public async getGuardarropasById(id: string): Promise<Guardarropa> {
        return Promise.resolve(this.usuario.getUserLoggedIn().guardarropas.find( (elem) => elem.id.toString() === id));
    }

    public async getGuardarropas(): Promise<Guardarropa[]> {
        return Promise.resolve(this.usuario.getUserLoggedIn().guardarropas);
    }

    public addPrenda(idUsuario: string, idGuardarropa: string, prenda: Prenda): Promise<Guardarropa> {
        return this.post(`/users/${idUsuario}/guardarropas/${idGuardarropa}/createPrenda`, prenda).then( (response) => response.data);
    }

    public deletePrenda(idGuardarropa: string, idPrenda: string): Promise<Guardarropa> {
        return Promise.resolve({
            id: '1',
            nombre: 'nombre 2',
            usuarios: [],
            prendas: [],
        });
    }
}
