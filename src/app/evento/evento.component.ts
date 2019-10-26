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

  constructor(private eventService: EventService, private router: Router) { }

  public async ngOnInit() {
    this.eventService.getEventos().then( (eventos: Evento[]) => this.eventos = eventos);
  }

  public goToDetailEvent(id: string) {
    this.router.navigate(['/evento/' + id]);
  }
}
