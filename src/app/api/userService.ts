import { ApiService } from './apiService';
import { Usuario } from '../modelo/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends ApiService {
    constructor() {
        super();
    }

    public async validateLogin(username: string, password: string): Promise<Usuario> {
        return this.post('/login', { username, password}).then( (response) => response.data);
    }
}
