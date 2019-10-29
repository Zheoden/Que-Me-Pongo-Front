import { Usuario } from '../modelo/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioGlobal {
    public user: Usuario;
}
