import { ApiService } from './apiService';
import { Evento } from '../modelo/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService extends ApiService {
    constructor() {
        super();
    }

    public async getEventosById(id: string): Promise<Evento> {
        return Promise.resolve({
            id: 'string',
            nombre: 'string',
            ciudad: 'string',
            fecha: new Date(),
            atuendosAceptados: [],
            atuendosSugeridos: [],
            usuario: {
                id: 'user',
                username: 'user',
                password: 'user',
                guardarropas: [],
                eventos: [],
                rangoSensibilidad: 1,
                email: 'hola@hola.com',
                numeroTelefono: '12341234',
            },
        });
    }

    public async getEventos(): Promise<Evento[]> {
        return Promise.resolve([{
            id: 'string',
            nombre: 'nombre',
            ciudad: 'ciudad',
            fecha: new Date(),
            atuendosAceptados: [],
            atuendosSugeridos: [],
            usuario: {
                id: 'user',
                username: 'user',
                password: 'user',
                guardarropas: [],
                eventos: [],
                rangoSensibilidad: 1,
                email: 'hola@hola.com',
                numeroTelefono: '12341234',
            },
        }, {
            id: 'string 1',
            nombre: 'nombre 1',
            ciudad: 'ciudad 1',
            fecha: new Date(),
            atuendosAceptados: [],
            atuendosSugeridos: [],
            usuario: {
                id: 'user',
                username: 'user',
                password: 'user',
                guardarropas: [],
                eventos: [],
                rangoSensibilidad: 1,
                email: 'hola@hola.com',
                numeroTelefono: '12341234',
            },
        }, {
            id: 'string 2',
            nombre: 'nombre 2',
            ciudad: 'ciudad 2',
            fecha: new Date(),
            atuendosAceptados: [],
            atuendosSugeridos: [],
            usuario: {
                id: 'user',
                username: 'user',
                password: 'user',
                guardarropas: [],
                eventos: [],
                rangoSensibilidad: 1,
                email: 'hola@hola.com',
                numeroTelefono: '12341234',
            },
        }]);
    }
}
