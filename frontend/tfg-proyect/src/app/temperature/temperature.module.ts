import { NgModule } from '@angular/core';
import { Temperature01Component } from './temperature01/temperature01.component';
import { Routes, RouterModule } from '@angular/router';
import { Temperature02Component } from './temperature02/temperature02.component';

const routes: Routes = [
  {
    path: 'temperature-01',
    component: Temperature01Component
  },
  {
    path: 'temperature-02',
    component: Temperature02Component
  }
]

@NgModule({
  declarations: [Temperature01Component, Temperature02Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class TemperatureModule { }
