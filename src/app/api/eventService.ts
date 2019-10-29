import { ApiService } from './apiService';
import { Evento, Atuendo, Usuario } from '../modelo/interfaces';
import { Injectable } from '@angular/core';
import { UsuarioGlobal } from '../usuario/user';

@Injectable()
export class EventService extends ApiService {
  constructor(private usuario: UsuarioGlobal) {
    super();
  }

  public async getEventosById(id: string): Promise<Evento> {
    return Promise.resolve(this.usuario.user.eventos.find( (elem) => elem.id.toString() === id));
  }

  public async getEventos(): Promise<Evento[]> {
    return Promise.resolve(this.usuario.user.eventos);
  }

  public async addEvento(evento: Evento): Promise<Evento[]> {
    return Promise.resolve([evento]);
  }

  public async calificarAtuendo(idAtuendo: string, puntuacion: number): Promise<Atuendo> {
    return Promise.resolve({} as any);
  }

  public async aceptarAtuendo(idAtuendo: string): Promise<Atuendo> {
    return this.put(`/atuendo/${idAtuendo}/aceptarSugerencia`).then( (response) => response.data);
  }

  public async atuendosRecomendados(userId: string, eventId: string): Promise<Atuendo[]> {
    return this.get(`/users/${userId}/eventos/${eventId}/sugerencias`).then( (response) => response.data);
  }
}
