import { Component, OnInit } from '@angular/core';
import { EventService } from '../api/eventService';
import { Evento, Atuendo, Prenda } from '../modelo/interfaces';
import { ActivatedRoute } from '@angular/router';
import { UsuarioGlobal } from '../usuario/user';

@Component({
  selector: 'app-evento-details',
  templateUrl: './eventoDetails.component.html',
  styleUrls: ['./eventoDetails.component.scss']
})
export class EventoDetailsComponent implements OnInit {
  public evento: Evento;
  public currentAtuendoId: string;
  public currentCalificacion: number;
  constructor(private eventService: EventService, private route: ActivatedRoute, private usuario: UsuarioGlobal) { }

  public async ngOnInit() {
    await this.eventService.getEventosById(this.route.snapshot.paramMap.get('id')).then( (evento: Evento) => this.evento = evento);
    this.eventService.atuendosRecomendados(this.usuario.getUserLoggedIn().id, this.evento.id)
      .then( (atuendos: Atuendo[]) => this.evento.atuendosSugeridos = atuendos);
  }

  public get atuendosAceptados() {
    return this.evento.atuendosAceptados;
  }

  public get atuendosSugeridos() {
    return this.evento && this.evento.atuendosSugeridos || [];
  }

  public setIdAtuendo(id: string) {
    this.currentAtuendoId = id;
  }

  public aceptarAtuendo() {
    const index = this.usuario.getUserLoggedIn().eventos.indexOf(this.evento);
    if (index !== -1) {
      const aux = this.usuario.getUserLoggedIn().eventos[index].atuendosSugeridos.find( (elem) => elem.id === this.currentAtuendoId);
      const indexAux = this.usuario.getUserLoggedIn().eventos[index].atuendosSugeridos.indexOf(aux);
      if (indexAux !== -1) {
        this.eventService.aceptarAtuendo(this.currentAtuendoId)
        .then( (atuendo) => this.usuario.getUserLoggedIn().eventos[index].atuendosSugeridos[indexAux] = atuendo );
      }
    }
  }

  public calificarAtuendo() {
    console.log(this.currentCalificacion);
    const index = this.usuario.getUserLoggedIn().eventos.indexOf(this.evento);
    if (index !== -1) {
      const aux = this.usuario.getUserLoggedIn().eventos[index].atuendosSugeridos.find( (elem) => elem.id === this.currentAtuendoId);
      const indexAux = this.usuario.getUserLoggedIn().eventos[index].atuendosSugeridos.indexOf(aux);
      if (indexAux !== -1) {
        this.eventService.calificarAtuendo(this.usuario.getUserLoggedIn().id, this.currentAtuendoId, this.currentCalificacion).
          then( (atuendo) => this.usuario.getUserLoggedIn().eventos[index].atuendosSugeridos[indexAux] = atuendo );
      }
    }
  }

  public limpiarCalificacion() {
    this.currentCalificacion = undefined;
  }

  public get partesSuperiores() {
    return ['BUZO', 'CAMISA', 'CAMPERA', 'REMERACORTA', 'REMERALARGA', 'SWEATER'];
  }

  public get partesInferiores() {
    return ['BERMUDAS', 'CALZAS', 'PANTALON', 'POLLERA', 'SHORTS'];
  }

  public get calzado() {
    return ['ZAPATILLAS', 'ZAPATOS', 'ZAPATOSDETACON', 'OJOTAS', 'MEDIAS'];
  }

  public get accesorios() {
    return [ 'ANTEOJOS', 'BUFANDA', 'GORRA', 'GUANTES', 'COLLAR', 'LENTES', 'AROS'];
  }

  public parsePrenda(atuendo: Atuendo, array) {
    return atuendo.prendas.find( (elem) => array.includes(elem.tipo)).tipo;
  }
}

