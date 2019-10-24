import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UsuarioComponent} from './usuario/usuario.component';
import {ApiGetwayService} from './apiGetway/apiGetway.service';
import {AuthService} from '../authenticator/auth.service';
import { GuardarropasComponent } from './guardarropas/guardarropas.component';
import { PrendasComponent } from './prendas/prendas.component';
import { EventoComponent } from './evento/evento.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { LayoutComponent } from './layout/layout.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiGetwayService,
              LoginComponent,
              AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
