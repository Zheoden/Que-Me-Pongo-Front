import { Component, OnInit } from '@angular/core';
import { Guardarropa, Prenda } from '../modelo/interfaces';
import { GuardarropaService } from '../api/guardarropaService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guardarropas-details',
  templateUrl: './guardarropasDetails.component.html',
  styleUrls: ['./guardarropasDetails.component.scss']
})
export class GuardarropasDetailsComponent implements OnInit {
  public guardarropa: Guardarropa;
  public currentPrenda: Prenda = {
    id: 'test',
    nombre: '',
    tipoPrenda: '',
    material: '',
    color: '',
    colorSecundario: '',
    enUso: false,
    guardarropas: [],
    atuendos: [],
  };
  public currentId: string;

  constructor(
    private guardarropaService: GuardarropaService,
    private route: ActivatedRoute
  ) {}

  public async ngOnInit() {
    this.guardarropaService
      .getGuardarropasById(this.route.snapshot.paramMap.get('id'))
      .then((guardarropa: Guardarropa) => (this.guardarropa = guardarropa));
  }

  public get prendaValida() {
    return Boolean(this.currentPrenda.nombre && this.currentPrenda.tipoPrenda && this.currentPrenda.material && this.currentPrenda.color);
  }

  public get prendas() {
    return this.guardarropa && this.guardarropa.prendas;
  }

  public get tienePrendas() {
    return this. prendas && this.prendas.length > 0;
  }

  public get colores() {
    return ['BLANCO', 'NEGRO', 'AZUL', 'ROJO', 'VERDE', 'AMARILLO', 'VIOLETA', 'ROSA', 'SALMON', 'MARRON',
    'GRIS', 'NARANJA', 'CELESTE', 'BORDO', 'BEIGE', 'CAQUI', 'CARMESI', 'TURQUESA'];
  }

  public get tipoPrendas() {
    return ['BUZO', 'CAMISA', 'CAMPERA', 'REMERACORTA', 'REMERALARGA', 'SWEATER', 'ZAPATILLAS', 'ZAPATOS', 'ZAPATOSDETACON', 'OJOTAS',
    'BERMUDAS', 'MEDIAS', 'CALZAS', 'PANTALON', 'POLLERA', 'SHORTS', 'ANTEOJOS', 'BUFANDA', 'GORRA', 'GUANTES', 'COLLAR', 'LENTES', 'AROS'];
  }

  public get materiales() {
    return ['ALGODON', 'CUERO', 'GABARDINA', 'JEAN', 'LINO', 'LYCRA', 'OXFORD', 'POLAR', 'SEDA', 'TERCIOPELO'];
  }

  public limpiarPrenda() {
    this.currentPrenda.nombre = '';
    this.currentPrenda.tipoPrenda = '';
    this.currentPrenda.material = '';
    this.currentPrenda.color = '';
    this.currentPrenda.colorSecundario = '';
  }

  public agregarPrenda() {
    this.guardarropaService.addPrenda(this.guardarropa.id, this.currentPrenda).then((guardarropa) => this.guardarropa = guardarropa);
  }

  public setIdPrenda(id: string) {
    this.currentId = id;
  }

  public borrarPrenda() {
    this.guardarropaService.deletePrenda(this.guardarropa.id, this.currentId).then((guardarropa) => this.guardarropa = guardarropa);
  }
}
