import { Component, OnInit } from '@angular/core';
import { EventService } from '../api/eventService';
import { Evento } from '../modelo/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento-details',
  templateUrl: './eventoDetails.component.html',
  styleUrls: ['./eventoDetails.component.scss']
})
export class EventoDetailsComponent implements OnInit {
  public evento: Evento;
  public currentAtuendoId: string;
  public currentCalificacion: number;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  public async ngOnInit() {
    this.eventService.getEventosById(this.route.snapshot.paramMap.get('id')).then( (evento: Evento) => this.evento = evento);
  }

  public get atuendosAceptados() {
    return this.evento.atuendosAceptados;
  }

  public get atuendosSugeridos() {
    return this.evento.atuendosSugeridos;
  }

  public setIdAtuendo(id: string) {
    this.currentAtuendoId = id;
  }

  public aceptarAtuendo() {
    this.eventService.aceptarAtuendo(this.currentAtuendoId);
  }

  public calificarAtuendo() {
    this.eventService.calificarAtuendo(this.currentAtuendoId, this.currentCalificacion);
  }

  public limpiarCalificacion() {
    this.calificarAtuendo = undefined;
  }
}

