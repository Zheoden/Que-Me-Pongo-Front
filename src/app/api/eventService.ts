import { ApiService } from './apiService';
import { Evento, Atuendo } from '../modelo/interfaces';
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
      atuendosSugeridos: [
        {
          id: 'string',
          prendas: [
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Buzo',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            },
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Camisa',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            },
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Shorts',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            },
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Zapatos',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            }
          ],
          aceptado: true,
          evento: {} as any
        },
        {
          id: 'string',
          prendas: [
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Buzo',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            },
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Camisa',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            },
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Shorts',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            },
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Zapatos',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            }
          ],
          aceptado: false,
          evento: {} as any
        },
        {
          id: 'string',
          prendas: [
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Buzo',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            },
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Camisa',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            },
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Shorts',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            },
            {
              id: '1',
              nombre: 'asd',
              tipoPrenda: 'Zapatos',
              material: 'Algodon',
              color: 'Rojo',
              colorSecundario: '',
              enUso: false,
              guardarropas: [],
              atuendos: []
            }
          ],
          aceptado: false,
          evento: {} as any
        }
      ],
      usuario: {
        id: 'user',
        username: 'user',
        password: 'user',
        guardarropas: [],
        eventos: [],
        rangoSensibilidad: 1,
        email: 'hola@hola.com',
        numeroTelefono: '12341234'
      }
    });
  }

  public async getEventos(): Promise<Evento[]> {
    return Promise.resolve([
      {
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
          numeroTelefono: '12341234'
        }
      },
      {
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
          numeroTelefono: '12341234'
        }
      },
      {
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
          numeroTelefono: '12341234'
        }
      }
    ]);
  }

  public async addEvento(evento: Evento): Promise<Evento[]> {
    return Promise.resolve([evento]);
  }

  public async calificarAtuendo(idAtuendo: string): Promise<Atuendo> {
    return Promise.resolve({} as any);
  }

  public async AceptarAtuendo(idAtuendo: string): Promise<Atuendo> {
    return Promise.resolve({} as any);
  }

  public async atuendosRecomendados(id: string): Promise<Atuendo[]> {
    return Promise.resolve([]);
  }
}
