import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';

import { UsuarioGlobal } from './usuario/user';

/* Servicios */
import { UserService } from './api/userService';
import { EventService } from './api/eventService';
import { GuardarropaService } from './api/guardarropaService';
import { AuthService } from '../authenticator/auth.service';

/* Componentes */
import { GuardarropasComponent } from './guardarropas/guardarropas.component';
import { GuardarropasDetailsComponent } from './guardarropasDetails/guardarropasDetails.component';
import { PrendasComponent } from './prendas/prendas.component';
import { EventoComponent } from './evento/evento.component';
import { EventoDetailsComponent } from './eventoDetails/eventoDetails.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    GuardarropasComponent,
    PrendasComponent,
    EventoComponent,
    CalendarioComponent,
    SugerenciasComponent,
    LayoutComponent,
    PageNotFoundComponent,
    EventoDetailsComponent,
    GuardarropasDetailsComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [UsuarioGlobal,
    UserService,
    EventService,
    GuardarropaService,
    LoginComponent,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
