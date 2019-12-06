import { ApiService } from './apiService';
import { Guardarropa, Prenda } from '../modelo/interfaces';
import { Injectable } from '@angular/core';
import { UsuarioGlobal } from '../usuario/user';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GuardarropaService extends ApiService {
    constructor(private usuario: UsuarioGlobal, private toastr: ToastrService) {
        super();
    }

    public async getGuardarropasById(id: string): Promise<Guardarropa> {
        return Promise.resolve(this.usuario.getUserLoggedIn().guardarropas.find( (elem) => elem.id.toString() === id));
    }

    public async getGuardarropas(): Promise<Guardarropa[]> {
        return Promise.resolve(this.usuario.getUserLoggedIn().guardarropas);
    }

    public addPrenda(idUsuario: string, idGuardarropa: string, prenda: Prenda): Promise<Guardarropa> {
        return this.post(`/users/${idUsuario}/guardarropas/${idGuardarropa}/createPrenda`, prenda).then( (response) => response.data)
        .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
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
