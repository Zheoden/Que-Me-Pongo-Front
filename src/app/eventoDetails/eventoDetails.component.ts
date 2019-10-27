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
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  public async ngOnInit() {
    this.eventService.getEventosById(this.route.snapshot.paramMap.get('id')).then( (evento: Evento) => this.evento = evento);
  }
}