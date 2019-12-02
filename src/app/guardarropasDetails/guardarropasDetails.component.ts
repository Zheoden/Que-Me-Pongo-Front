import { Component, OnInit } from '@angular/core';
import { Guardarropa, Prenda, Data } from '../modelo/interfaces';
import { GuardarropaService } from '../api/guardarropaService';
import { ActivatedRoute } from '@angular/router';
import { UsuarioGlobal } from '../usuario/user';
import { UserService } from '../api/userService';
import { upperCaseFirstLetter, lowerCaseAllWordsExceptFirstLetters } from '../modelo/utils';

@Component({
  selector: 'app-guardarropas-details',
  templateUrl: './guardarropasDetails.component.html',
  styleUrls: ['./guardarropasDetails.component.scss']
})
export class GuardarropasDetailsComponent implements OnInit {
  public guardarropa: Guardarropa;
  public currentPrenda: Prenda = {
    id: '',
    nombre: '',
    tipo: '',
    material: '',
    color_primario: '',
    color_secundario: '',
    enUso: false,
    guardarropas: [],
    atuendos: [],
    imagen: ''
  };
  public currentId: string;
  public currentFile: File;
  public isUploaded = false;
  public color: Data[];
  public tipoPrenda: Data[];
  public material: Data[];

  constructor(
    private guardarropaService: GuardarropaService,
    private userService: UserService,
    private route: ActivatedRoute,
    private usuario: UsuarioGlobal
  ) {}

  public ngOnInit() {
    this.guardarropaService.getGuardarropasById(this.route.snapshot.paramMap.get('id'))
      .then((guardarropa: Guardarropa) => (this.guardarropa = guardarropa));
    this.userService.getColores().then( (response) => this.color = response);
    this.userService.getTipoPrendas().then( (response) => this.tipoPrenda = response);
    this.userService.getMateriales().then( (response) => this.material = response);
  }

  public get prendaValida() {
    return Boolean(
      this.currentPrenda.nombre &&
        this.currentPrenda.tipo &&
        this.currentPrenda.material &&
        this.currentPrenda.color_primario
    );
  }

  public get prendas() {
    return this.guardarropa && this.guardarropa.prendas;
  }

  public get tienePrendas() {
    return this.prendas && this.prendas.length > 0;
  }

  public get colores() {
    return this.color.map( (elem) => upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(elem.nombre)));
  }

  public get tipoPrendas() {
    return this.tipoPrenda.map( (elem) => upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(elem.nombre)));
  }

  public get materiales() {
    return this.material.map( (elem) => upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(elem.nombre)));
  }

  public transformToImage(base64: string) {
    return `<img height=70 width=70 src="${base64}">`;
  }

  public limpiarPrenda() {
    this.currentPrenda.nombre = '';
    this.currentPrenda.tipo = '';
    this.currentPrenda.material = '';
    this.currentPrenda.color_primario = '';
    this.currentPrenda.color_secundario = undefined;
  }

  public agregarPrenda() {
    this.guardarropaService
      .addPrenda(
        this.usuario.getUserLoggedIn().id,
        this.guardarropa.id,
        this.currentPrenda
      )
      .then(guardarropa => {
        const index = this.usuario
          .getUserLoggedIn()
          .guardarropas.indexOf(this.guardarropa);
        this.guardarropa = guardarropa;
        if (index !== -1) {
          this.usuario.getUserLoggedIn().guardarropas[index] = this.guardarropa;
        }
      });
  }

  public setIdPrenda(id: string) {
    this.currentId = id;
  }

  public borrarPrenda() {
    this.guardarropaService
      .deletePrenda(this.guardarropa.id, this.currentId)
      .then(guardarropa => (this.guardarropa = guardarropa));
  }

  public fileChange(fileList: FileList) {
    const fileInput = document.getElementById('file-input') as HTMLElement;
    if (fileInput) {
      this.isUploaded = true;
      this.currentFile = fileList[0];
      const read = new FileReader();
      read.onload = this._handleReaderLoaded.bind(this);
      read.readAsDataURL(this.currentFile);
    }
  }

  public reset() {
    this.currentFile = undefined;
    this.currentPrenda.imagen = '';
    this.isUploaded = false;
  }

  _handleReaderLoaded(readerEvt) {
    this.currentPrenda.imagen = readerEvt.target.result;
    this.guardarropa.prendas[0].imagen = this.currentPrenda.imagen;
  }
}
