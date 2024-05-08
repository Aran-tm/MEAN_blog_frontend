import { Routes } from '@angular/router';  // importacion de Routes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

// array de rutas o sistema de rutas
export const routes: Routes = [

  // tres rutas u objetos que se necesitan importar
  {
    path: 'login',      // direccion o ruta
    component: LoginComponent     // componente que se necesita cargar
  },
  {
    path: 'register',   // direccion o ruta
    component: RegisterComponent      // componente que se necesita cargar
  },
  {
    path: 'home',    // direccion o ruta
    component: HomeComponent        // componente que se necesita cargar
  },
  {
    path: '',   // direccion o ruta VACIA
    redirectTo: '/login',         // redireccion hacia
    pathMatch: 'full',
  },
  {
    path: '**',   // direccion o ruta ANONIMA (Cualquier otro CASO)
    component: Page404Component,      // componente que se necesita cargar
  },
];

