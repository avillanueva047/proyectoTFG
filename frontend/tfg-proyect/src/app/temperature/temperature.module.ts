import { NgModule } from '@angular/core';
import { Temperature01Component } from './temperature01/temperature01.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'temperature-01',
    component: Temperature01Component
  }
]

@NgModule({
  declarations: [Temperature01Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class TemperatureModule { }
