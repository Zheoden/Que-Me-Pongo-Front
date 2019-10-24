import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { GuardarropasComponent } from './guardarropas/guardarropas.component';
import { PrendasComponent } from './prendas/prendas.component';
import { EventoComponent } from './evento/evento.component';
import { CalendarioComponent } from './calendario/calendario.component';



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
        path: 'guardarropas/:id/prendas',
        component: PrendasComponent,
      },
      {
        path: 'evento',
        component: EventoComponent,
      },
      {
        path: 'calendario',
        component: CalendarioComponent,
      },
      {
        path: 'not-found',
        component: PageNotFoundComponent
      },
      {
        path: '**',
        redirectTo: '/not-found'
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
