import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Temperature01Component } from './temperature01/temperature01.component';
import { Temperature02Component } from './temperature02/temperature02.component';
import { Temperature03Component } from './temperature03/temperature03.component';

const routes: Routes = [
  {
    path: 'temperature-01',
    component: Temperature01Component
  },
  {
    path: 'temperature-02',
    component: Temperature02Component
  },
  {
    path: 'temperature-03',
    component: Temperature03Component
  }
]

@NgModule({
  declarations: [Temperature01Component, Temperature02Component, Temperature03Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class TemperatureModule { }
