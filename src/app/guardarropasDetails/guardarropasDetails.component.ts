import { Component, OnInit } from '@angular/core';
import { Guardarropa } from '../modelo/interfaces';
import { GuardarropaService } from '../api/guardarropaService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guardarropas-details',
  templateUrl: './guardarropasDetails.component.html',
  styleUrls: ['./guardarropasDetails.component.scss']
})
export class GuardarropasDetailsComponent implements OnInit {
  public guardarropa: Guardarropa;

  constructor(private guardarropaService: GuardarropaService, private route: ActivatedRoute) { }

  public async ngOnInit() {
    this.guardarropaService.getGuardarropasById(this.route.snapshot.paramMap.get('id')).then(
      (guardarropa: Guardarropa) => this.guardarropa = guardarropa);
  }
}
