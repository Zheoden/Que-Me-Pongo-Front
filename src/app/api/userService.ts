import { ApiService } from './apiService';
import { Usuario, Data } from '../modelo/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends ApiService {
    constructor() {
        super();
    }

    public async validateLogin(username: string, password: string): Promise<Usuario> {
        return this.post('/login', { username, password}).then( (response) => response.data);
    }

    public async getUserById(id: string): Promise<Usuario> {
        return this.get(`/users/${id}`).then( (response) => response.data);
    }

    public async getCategorias(): Promise<Data[]> {
        return this.get('/categorias').then( (response) => response.data);
    }

    public async getColores(): Promise<Data[]> {
        return this.get('/colores').then( (response) => response.data);
    }

    public async getMateriales(): Promise<Data[]> {
        return this.get('/materiales').then( (response) => response.data);
    }

    public async getTipoPrendas(): Promise<Data[]> {
        return this.get('/tipoPrendas').then( (response) => response.data);
    }
}
