import { ApiService } from './apiService';
import { Evento, Atuendo, Usuario, EventoPayload } from '../modelo/interfaces';
import { Injectable } from '@angular/core';
import { UsuarioGlobal } from '../usuario/user';

@Injectable()
export class EventService extends ApiService {
  constructor(private usuario: UsuarioGlobal) {
    super();
  }

  public async getEventosById(id: string): Promise<Evento> {
    return Promise.resolve(this.usuario.getUserLoggedIn().eventos.find( (elem) => elem.id.toString() === id));
  }

  public async getEventos(): Promise<Evento[]> {
    return Promise.resolve(this.usuario.getUserLoggedIn().eventos);
  }

  public async addEvento(userId: string, evento: EventoPayload): Promise<Evento[]> {
    return this.post(`/users/${userId}/eventos/crearEvento`, evento).then( (response) => response.data);
  }

  public async calificarAtuendo(userid: string, idAtuendo: string, puntuacion: number): Promise<Atuendo> {
    return this.put(`/users/${userid}/atuendo/${idAtuendo}/calificarAtuendo/${puntuacion}`).then( (response) => response.data);
  }

  public async aceptarAtuendo(idAtuendo: string): Promise<Atuendo> {
    return this.put(`/atuendo/${idAtuendo}/aceptarSugerencia`).then( (response) => response.data);
  }

  public async atuendosRecomendados(userId: string, eventId: string): Promise<Atuendo[]> {
    return this.get(`/users/${userId}/eventos/${eventId}/sugerencias`).then( (response) => response.data);
  }
}
