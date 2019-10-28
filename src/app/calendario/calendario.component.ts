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


  @ViewChild('calendar', {static: true}) calendarComponent: FullCalendarComponent; // the #calendar in the template

  eventos: {};
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;

 constructor(private eventoAxios: EventService) {

 }


  armarBodyEvento(evento: Evento) {
    return {title: evento.nombre, start: evento.fecha, textColor: 'white'};
  }

  obetenerEventos(eventos: Evento[]) {
  this.eventos = eventos.map(evento => this.armarBodyEvento(evento));
  }

   ngOnInit() {
     this.eventoAxios.getEventos().then(eventos => {
       this.obetenerEventos(eventos);
     });
  }

}
