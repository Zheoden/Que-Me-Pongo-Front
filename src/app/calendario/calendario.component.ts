import { EventService } from './../api/eventService';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { Evento } from '../modelo/interfaces';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {


  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent; // the #calendar in the template

  eventos: {};
  nombre: string;
  fecha: Date;
  fechaHoy = new Date();
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];

 constructor(private eventoAxios: EventService) {

 }


  armarBodyEvento(evento: Evento) {
    return {title: evento.nombre, start: evento.fecha};
  }

  obetenerEventos(eventos: Evento[]) {
  this.eventos = eventos.map(evento => this.armarBodyEvento(evento));
  this.calendarEvents.push(this.eventos);
  }

  ngOnInit(): void {
     this.eventoAxios.getEventos().then(eventos => {
       this.obetenerEventos(eventos);
     });
  }

}
