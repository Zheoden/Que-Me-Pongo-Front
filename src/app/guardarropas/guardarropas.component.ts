import { Component, OnInit } from '@angular/core';
import { Guardarropa } from '../modelo/interfaces';
import { GuardarropaService } from '../api/guardarropaService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardarropas',
  templateUrl: './guardarropas.component.html',
  styleUrls: ['./guardarropas.component.scss']
})
export class GuardarropasComponent implements OnInit {
  public guardarropas: Guardarropa[];

  constructor(private guardarropaService: GuardarropaService, private router: Router) { }

  public async ngOnInit() {
    this.guardarropaService.getGuardarropas().then( (guardarropas: Guardarropa[]) => this.guardarropas = guardarropas);
  }

  public goToDetail(id: string) {
    this.router.navigate(['/guardarropas/' + id]);
  }

  public borrarGuardarropas(guardarropaId: string) {
  }

}
