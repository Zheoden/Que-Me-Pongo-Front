import { Component, OnInit } from '@angular/core';
import { EventService } from '../api/eventService';
import { Evento, EventoPayload } from '../modelo/interfaces';
import { Router } from '@angular/router';
import { UsuarioGlobal } from '../usuario/user';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {
  public eventos: Evento[];
  public eventoId: string;
  public validDate: boolean;
  public currentEvent: Evento = {
    id: '',
    nombre: '',
    ciudad: '',
    fecha: null,
    atuendosMovimientos: [],
    atuendosAceptados: [],
    usuario: {} as any
  };

  constructor(
    private eventService: EventService,
    private router: Router,
    private usuario: UsuarioGlobal
  ) {}

  public get eventoValido() {
    return Boolean(
      this.currentEvent.nombre &&
        this.currentEvent.ciudad &&
        this.currentEvent.fecha &&
        !this.validDate
    );
  }

  public onEventChangeDate() {
    this.validDate = this.currentEvent.fecha <= new Date();
  }

  public async ngOnInit() {
    this.eventService
      .getEventos()
      .then((eventos: Evento[]) => (this.eventos = eventos));
  }

  public goToDetailEvent(id: string) {
    this.router.navigate(['/eventos/' + id]);
  }

  public setEvento(id: string) {
    this.eventoId = id;
  }

  public borrarEvento() {
    this.eventService.deleteEventoById(this.eventoId).then( (eventos: Evento[]) => {
      this.eventos = eventos;
      this.usuario.user.eventos = this.eventos;
      this.usuario.setUserLoggedIn(this.usuario.user);
    });
  }

  public agregarEvento() {
    this.eventService
      .addEvento(this.usuario.getUserLoggedIn().id, {
        nombre: this.currentEvent.nombre,
        fecha: this.formatDate(this.currentEvent.fecha),
        ciudad: this.currentEvent.ciudad
      })
      .then((eventos: Evento[]) => {
        this.eventos = eventos;
        this.usuario.user.eventos = this.eventos;
        this.usuario.setUserLoggedIn(this.usuario.user);
      });
  }

  public formatDate(d: Date) {
    const date = new Date(d);
    const aaaa = date.getFullYear();
    let gg: any = date.getDate();
    let mm: any = date.getMonth() + 1;

    if (gg < 10) {
      gg = '0' + gg;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    const curDay = aaaa + '-' + mm + '-' + gg;

    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();
    let seconds: any = date.getSeconds();

    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return curDay + ' ' + hours + ':' + minutes + ':' + seconds;
  }

  public limpiarEvento() {
    this.currentEvent = {
      id: '',
      nombre: '',
      ciudad: '',
      fecha: null,
      atuendosMovimientos: [],
      atuendosAceptados: [],
      usuario: {} as any
    };
  }
}
