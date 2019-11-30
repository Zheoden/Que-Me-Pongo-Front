import { Component, OnInit } from '@angular/core';
import { Guardarropa, Prenda } from '../modelo/interfaces';
import { GuardarropaService } from '../api/guardarropaService';
import { ActivatedRoute } from '@angular/router';
import { UsuarioGlobal } from '../usuario/user';

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

  constructor(
    private guardarropaService: GuardarropaService,
    private route: ActivatedRoute,
    private usuario: UsuarioGlobal
  ) {}

  public async ngOnInit() {
    this.guardarropaService
      .getGuardarropasById(this.route.snapshot.paramMap.get('id'))
      .then((guardarropa: Guardarropa) => (this.guardarropa = guardarropa));
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
    return [
      'BLANCO',
      'NEGRO',
      'AZUL',
      'ROJO',
      'VERDE',
      'AMARILLO',
      'VIOLETA',
      'ROSA',
      'SALMON',
      'MARRON',
      'GRIS',
      'NARANJA',
      'CELESTE',
      'BORDO',
      'BEIGE',
      'CAQUI',
      'CARMESI',
      'TURQUESA'
    ];
  }

  public get tipoPrendas() {
    return [
      'BUZO',
      'CAMISA',
      'CAMPERA',
      'REMERACORTA',
      'REMERALARGA',
      'SWEATER',
      'ZAPATILLAS',
      'ZAPATOS',
      'ZAPATOSDETACON',
      'OJOTAS',
      'BERMUDAS',
      'MEDIAS',
      'CALZAS',
      'PANTALON',
      'POLLERA',
      'SHORTS',
      'ANTEOJOS',
      'BUFANDA',
      'GORRA',
      'GUANTES',
      'COLLAR',
      'LENTES',
      'AROS'
    ];
  }

  public get materiales() {
    return [
      'ALGODON',
      'CUERO',
      'GABARDINA',
      'JEAN',
      'LINO',
      'LYCRA',
      'OXFORD',
      'POLAR',
      'SEDA',
      'TERCIOPELO'
    ];
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
