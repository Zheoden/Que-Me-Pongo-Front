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

    public async getDataUsuarios(): Promise<Usuario[]> {
        // return this.post('', { username, password}).then( (response) => response.data);
        return Promise.resolve([]);
    }
}
