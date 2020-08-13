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
  },
  {
    path: 'dimmer',
    loadChildren: () => import('./dimmer/dimmer.module').then(m => m.DimmerModule)
  },
  {
    path: 'light-rgb',
    loadChildren: () => import('./light-rgb/light-rgb.module').then(m => m.LightRGBModule)
  },
  {
    path: 'capacity',
    loadChildren: () => import('./capacity/capacity.module').then(m => m.CapacityModule)
  },
  {
    path: 'wave',
    loadChildren: () => import('./wave/wave.module').then(m => m.WaveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
