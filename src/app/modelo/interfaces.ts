export interface Usuario {
  id: string;
  username: string;
  password: string;
  guardarropas: Guardarropa [];
  eventos: Evento [];
  rangoSensibilidad: number;
  email: string;
  numeroTelefono: string;
  token?: string;
}

export interface Prenda {
  id: string;
  nombre: string;
  tipoPrenda: string;
  material: string;
  color: string;
  colorSecundario: string;
  enUso: boolean;
  guardarropas: Guardarropa[];
  atuendos: Prenda[];
}

export interface Guardarropa {
  id: string;
  nombre: string;
  usuarios: Usuario[];
  prendas: Prenda[];
}

export interface Evento {
  id: string;
  nombre: string;
  ciudad: string;
  fecha: Date;
  atuendosAceptados: Atuendo[];
  atuendosMovimientos: Atuendo[];
  usuario: Usuario;
}

export interface Atuendo {
  id: string;
  prendas: Prenda[];
  aceptado: boolean;
  evento: Evento;
}

