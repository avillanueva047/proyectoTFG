import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./temperature/temperature.module').then(m => m.TemperatureModule)
  },
  {
    path: 'louver',
    loadChildren: () => import('./louver/louver.module').then(m => m.LouverModule)
  },
  {
    path: 'light',
    loadChildren: () => import('./light/light.module').then(m => m.LightModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
