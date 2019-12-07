import { Component, OnInit } from '@angular/core';
import { EventService } from '../api/eventService';
import { Evento, Atuendo, Prenda } from '../modelo/interfaces';
import { ActivatedRoute } from '@angular/router';
import { UsuarioGlobal } from '../usuario/user';
import { formatString } from '../modelo/utils';

@Component({
  selector: 'app-evento-details',
  templateUrl: './eventoDetails.component.html',
  styleUrls: ['./eventoDetails.component.scss']
})
export class EventoDetailsComponent implements OnInit {
  public evento: Evento;
  public currentAtuendoId: string;
  public currentCalificacion: number;
  public loading = false;
  public formatString = (cadena: string) => formatString(cadena);

  constructor(private eventService: EventService, private route: ActivatedRoute, private usuario: UsuarioGlobal) { }

  public async ngOnInit() {
    this.loading = true;
    this.evento = await this.eventService.getEventosById(this.route.snapshot.paramMap.get('id'));
    const indexAux = this.usuario.user.eventos.indexOf(this.evento);
    if (indexAux !== -1) {
      this.evento.atuendosMovimientos = await this.eventService.atuendosRecomendados(this.usuario.getUserLoggedIn().id, this.evento.id);
      this.usuario.user.eventos[indexAux] = this.evento;
      this.usuario.setUserLoggedIn(this.usuario.user);
    }
    this.loading = false;
  }

  public get atuendosAceptados() {
    return this.evento.atuendosAceptados;
  }

  public get atuendosMovimientos() {
    return this.evento && this.evento.atuendosMovimientos || [];
  }

  public get sePuedeAceptarEventos() {
    return this.atuendosMovimientos.some( (element) => element.aceptado);
  }

  public get partesSuperiores() {
    return ['BUZO', 'CAMISA', 'CAMPERA', 'MUSCULOSA', 'REMERACORTA', 'REMERALARGA', 'SWEATER'];
  }

  public get partesInferiores() {
    return ['BERMUDAS', 'CALZAS', 'PANTALONLARGO', 'PANTALONCORTO', 'POLLERA', 'SHORTS'];
  }

  public get calzado() {
    return ['ZAPATILLAS', 'ZAPATOS', 'ZAPATOSDETACON', 'OJOTAS', 'MEDIAS'];
  }

  public get accesorios() {
    return [ 'ANTEOJOS', 'BUFANDA', 'GORRA', 'GUANTES', 'COLLAR', 'LENTES', 'AROS'];
  }

  public setIdAtuendo(id: string) {
    this.currentAtuendoId = id;
  }

  public aceptarAtuendo() {
    const aux = this.evento.atuendosMovimientos.find( (elem) => elem.id === this.currentAtuendoId);
    const indexAux = this.evento.atuendosMovimientos.indexOf(aux);
    if (indexAux !== -1) {
      this.eventService.aceptarAtuendo(this.currentAtuendoId)
      .then( (atuendo) => {
        this.evento.atuendosMovimientos[indexAux] = atuendo;
        const index = this.usuario.getUserLoggedIn().eventos.findIndex( (e) => e.id === this.evento.id);
        this.usuario.user.eventos[index] = this.evento;
        this.usuario.setUserLoggedIn(this.usuario.user);
      });
    }
  }

  public calificarAtuendo() {
    const aux = this.evento.atuendosMovimientos.find( (elem) => elem.id === this.currentAtuendoId);
    const indexAux = this.evento.atuendosMovimientos.indexOf(aux);
    if (indexAux !== -1) {
      this.eventService.calificarAtuendo(this.usuario.getUserLoggedIn().id, this.currentAtuendoId, this.currentCalificacion)
      .then( (atuendo) => {
        this.evento.atuendosMovimientos[indexAux] = atuendo;
        const index = this.usuario.getUserLoggedIn().eventos.findIndex( (e) => e.id === this.evento.id);
        this.usuario.user.eventos[index] = this.evento;
        this.usuario.setUserLoggedIn(this.usuario.user);
      });
    }
  }

  public limpiarCalificacion() {
    this.currentCalificacion = undefined;
  }
  public parsePrenda(atuendo: Atuendo, array) {
    return atuendo.prendas.find( (elem) => array.includes(elem.tipo)).tipo;
  }

  public getAtuendoFull(atuendo: Atuendo): string {
    let atuendoFull = '';
    atuendo.prendas.forEach( (prenda) => atuendoFull += `<span>Nombre: ${prenda.nombre}, Tipo: ${prenda.tipo}, ` +
      `Material: ${prenda.material}, Color Primario: ${prenda.colorPrimario}, ` +
      `Color Secundario: ${prenda.colorSecundario || 'N/A'}, En uso: ${prenda.enUso}</br></span>`);
    return atuendoFull;
  }
}

