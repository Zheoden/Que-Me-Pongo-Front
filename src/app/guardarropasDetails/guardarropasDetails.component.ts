import { Component, OnInit } from '@angular/core';
import { Guardarropa, Prenda, Data } from '../modelo/interfaces';
import { GuardarropaService } from '../api/guardarropaService';
import { ActivatedRoute } from '@angular/router';
import { UsuarioGlobal } from '../usuario/user';
import { UserService } from '../api/userService';
import { formatString } from '../modelo/utils';
import { ToastrService } from 'ngx-toastr';

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
    colorPrimario: '',
    colorSecundario: '',
    enUso: false,
    guardarropas: [],
    atuendos: [],
    imagen: ''
  };
  public currentId: string;
  public currentFile: File;
  public isUploaded = false;
  public formatString = (cadena) => formatString(cadena);

  constructor(
    private guardarropaService: GuardarropaService,
    private userService: UserService,
    private route: ActivatedRoute,
    private usuario: UsuarioGlobal,
    private toastr: ToastrService
  ) {}

  public ngOnInit() {
    this.guardarropaService.getGuardarropasById(this.route.snapshot.paramMap.get('id'))
      .then((guardarropa: Guardarropa) => (this.guardarropa = guardarropa));
  }

  public get prendaValida() {
    return Boolean(
      this.currentPrenda.nombre &&
        this.currentPrenda.tipo &&
        this.currentPrenda.material &&
        this.currentPrenda.colorPrimario
    );
  }

  public get prendas() {
    return this.guardarropa && this.guardarropa.prendas;
  }

  public get tienePrendas() {
    return this.prendas && this.prendas.length > 0;
  }

  public get colores() {
    return this.usuario.getColores() && this.usuario.getColores().map( (elem) => elem.nombre);
  }

  public get tipoPrendas() {
    return this.usuario.getTipoPrenda() && this.usuario.getTipoPrenda().map( (elem) => elem.nombre);
  }

  public get materiales() {
    return this.usuario.getMateriales() && this.usuario.getMateriales().map( (elem) => elem.nombre);
  }

  public transformToImage(base64: string) {
    return `<img height=70 width=70 src='${base64}'>`;
  }

  public limpiarPrenda() {
    this.currentPrenda.nombre = '';
    this.currentPrenda.tipo = '';
    this.currentPrenda.material = '';
    this.currentPrenda.colorPrimario = '';
    this.currentPrenda.colorSecundario = '';
  }

  public agregarPrenda() {
    if (this.currentPrenda.colorSecundario === '') {
      this.currentPrenda.colorSecundario = undefined;
    }
    this.guardarropaService
      .addPrenda(
        this.usuario.getUserLoggedIn().id,
        this.guardarropa.id,
        this.currentPrenda
      )
      .then(guardarropa => {
        this.usuario.getUserLoggedIn().guardarropas.forEach( (elem, index) => {
          if (elem.id.toString() === this.guardarropa.id.toString() && guardarropa.id.toString() === elem.id.toString()) {
            this.guardarropa = guardarropa;
            this.usuario.updateGuardarropa(index, guardarropa);
          }
        });
      });
  }

  public setIdPrenda(id: string) {
    this.currentId = id;
  }

  public borrarPrenda() {
    /*
    this.guardarropaService
      .deletePrenda(this.guardarropa.id, this.currentId)
      .then(guardarropa => (this.guardarropa = guardarropa));
    */
  }

  public fileChange(fileList: FileList) {
    const fileInput = document.getElementById('file-input') as HTMLElement;
    if (fileInput) {
      this.isUploaded = true;
      this.currentFile = fileList[0];
      if (this.currentFile.size > 12000) {
        this.toastr.error('El tamaño de la imagen es demasiado grande', 'Error', {positionClass: 'toast-bottom-center'});
        this.reset();
      }
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
  }
}
