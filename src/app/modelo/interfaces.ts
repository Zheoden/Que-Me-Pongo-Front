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
  tipo: string;
  material: string;
  colorPrimario: string;
  colorSecundario?: string;
  enUso: boolean;
  guardarropas: Guardarropa[];
  atuendos: Prenda[];
  imagen: string;
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
  atuendosSugeridos: Atuendo[];
  atuendosAceptados: Atuendo[];
  usuario: Usuario;
}

export interface Atuendo {
  id: string;
  prendas: Prenda[];
  aceptado: boolean;
  evento: Evento;
  calificacion: number;
}

export interface EventoPayload {
  nombre: string;
  ciudad: string;
  fecha: string;
}

export interface Data {
  id: string;
  nombre: string;
}
