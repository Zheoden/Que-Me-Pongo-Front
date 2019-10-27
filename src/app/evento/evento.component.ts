import { Component, OnInit } from '@angular/core';
import { EventService } from '../api/eventService';
import { Evento } from '../modelo/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {
  public eventos: Evento[];
  public eventoId: string;
  public currentEvent: Evento = {
    id: '',
    nombre: '',
    ciudad: '',
    fecha: null,
    atuendosSugeridos: [],
    atuendosAceptados: [],
    usuario: {} as any
  };

  constructor(private eventService: EventService, private router: Router) {}

  public get eventoValido() {
    return Boolean(
      this.currentEvent.nombre &&
        this.currentEvent.ciudad &&
        this.currentEvent.fecha
    );
  }

  public async ngOnInit() {
    this.eventService
      .getEventos()
      .then((eventos: Evento[]) => (this.eventos = eventos));
  }

  public goToDetailEvent(id: string) {
    this.router.navigate(['/eventos/' + id]);
  }

  public borrarEvento(id: string) {
    this.eventoId = id;
  }

  public agregarEvento() {
    this.eventService.addEvento(this.currentEvent).then( (eventos: Evento[]) => this.eventos = eventos );
  }

  public limpiarEvento() {
    this.currentEvent = {
      id: '',
      nombre: '',
      ciudad: '',
      fecha: null,
      atuendosSugeridos: [],
      atuendosAceptados: [],
      usuario: {} as any
    };
  }
}
