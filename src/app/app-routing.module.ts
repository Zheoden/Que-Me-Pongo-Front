import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { GuardarropasComponent } from './guardarropas/guardarropas.component';
import { GuardarropasDetailsComponent } from './guardarropasDetails/guardarropasDetails.component';
import { PrendasComponent } from './prendas/prendas.component';
import { EventoComponent } from './evento/evento.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { EventoDetailsComponent } from './eventoDetails/eventoDetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: UsuarioComponent
      },
      {
        path: 'guardarropas',
        component: GuardarropasComponent
      },
      {
        path: 'guardarropas/:id',
        component: GuardarropasDetailsComponent,
      },
      {
        path: 'evento',
        component: EventoComponent,
      },
      {
        path: 'evento/:id',
        component: EventoDetailsComponent,
      },
      {
        path: 'calendario',
        component: CalendarioComponent,
      },
      {
        path: '**',
        redirectTo: '/not-found'
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
