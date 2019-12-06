import { ApiService } from './apiService';
import { Evento, Atuendo, Usuario, EventoPayload } from '../modelo/interfaces';
import { Injectable } from '@angular/core';
import { UsuarioGlobal } from '../usuario/user';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class EventService extends ApiService {
  constructor(private usuario: UsuarioGlobal, private toastr: ToastrService) {
    super();
  }

  public async getEventosById(id: string): Promise<Evento> {
    return Promise.resolve(this.usuario.getUserLoggedIn().eventos.find( (elem) => elem.id.toString() === id));
  }

  public async deleteEventoById(id: string): Promise<Evento[]> {
    return this.delete(`/users/${this.usuario.getUserLoggedIn().id}/eventos/${id}/eliminarEvento`).then((response) => response.data)
    .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
  }

  public async getEventos(): Promise<Evento[]> {
    return Promise.resolve(this.usuario.getUserLoggedIn().eventos);
  }

  public async addEvento(userId: string, evento: EventoPayload): Promise<Evento[]> {
    return this.post(`/users/${userId}/eventos/crearEvento`, evento).then( (response) => response.data)
    .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
  }

  public async calificarAtuendo(userid: string, idAtuendo: string, puntuacion: number): Promise<Atuendo> {
    return this.post(`/users/${userid}/atuendo/${idAtuendo}/calificarAtuendo/${puntuacion}`).then( (response) => response.data)
    .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
  }

  public async aceptarAtuendo(idAtuendo: string): Promise<Atuendo> {
    return this.post(`/atuendo/${idAtuendo}/aceptarSugerencia`).then( (response) => response.data)
    .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
  }

  public async atuendosRecomendados(userId: string, eventId: string): Promise<Atuendo[]> {
    return this.get(`/users/${userId}/eventos/${eventId}/sugerencias`).then( (response) => response.data)
    .catch((error) => this.toastr.error(error.response.data, error.response.status, {positionClass: 'toast-bottom-center'}));
  }
}
