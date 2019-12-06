import { ApiService } from './apiService';
import { Usuario, Data } from '../modelo/interfaces';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserService extends ApiService {
    constructor(private toastr: ToastrService) {
        super();
    }

    public async validateLogin(username: string, password: string): Promise<Usuario> {
        return this.post('/login', { username, password}).then( (response) => response.data)
        .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
    }

    public async getUserById(id: string): Promise<Usuario> {
        return this.get(`/users/${id}`).then( (response) => response.data)
        .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
    }

    public async getCategorias(): Promise<Data[]> {
        return this.get('/categorias').then( (response) => response.data)
        .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
    }

    public async getColores(): Promise<Data[]> {
        return this.get('/colores').then( (response) => response.data)
        .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
    }

    public async getMateriales(): Promise<Data[]> {
        return this.get('/materiales').then( (response) => response.data)
        .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
    }

    public async getTipoPrendas(): Promise<Data[]> {
        return this.get('/tipoPrendas').then( (response) => response.data)
        .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
    }
}
