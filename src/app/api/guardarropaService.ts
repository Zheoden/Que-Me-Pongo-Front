import { ApiService } from './apiService';
import { Usuario, Guardarropa } from '../modelo/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class GuardarropaService extends ApiService {
    constructor() {
        super();
    }

    public async getGuardarropasById(id: string): Promise<Guardarropa> {
        return Promise.resolve({
            id: '1',
            nombre: 'nombre 2',
            usuarios: [],
            prendas: [],
        });
    }

    public async getGuardarropas(): Promise<Guardarropa[]> {
        return Promise.resolve([{
            id: '1',
            nombre: 'nombre 1',
            usuarios: [],
            prendas: [],
        }, {
            id: '2',
            nombre: 'nombre 2',
            usuarios: [],
            prendas: [],
        }, {
            id: '3',
            nombre: 'nombre 3',
            usuarios: [],
            prendas: [],
        }, {
            id: '4',
            nombre: 'nombre 4',
            usuarios: [],
            prendas: [],
        }]);
    }
}
