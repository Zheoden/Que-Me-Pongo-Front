import { ApiService } from './apiService';
import { Usuario } from '../modelo/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends ApiService {
    constructor() {
        super();
    }

    public async validateLogin(username: string, password: string): Promise<boolean> {
        // return this.post('', { username, password}).then( (response) => response.data);
        return Promise.resolve(true);
    }

    public async getDataUsuario(): Promise<Usuario> {
        // return this.post('', { username, password}).then( (response) => response.data);
        return Promise.resolve({
            id: 'pepe',
            username: 'pepe',
            password: 'pepe',
            guardarropas: [],
            eventos: [],
            rangoSensibilidad: 1,
            email: 'pepe@pepe.com',
            numeroTelefono: '12341234',
        });
    }
}
