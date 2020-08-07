import { NgModule } from '@angular/core';
import { Dimmer01Component } from './dimmer01/dimmer01.component';
import { Routes, RouterModule } from '@angular/router';
import { Dimmer02Component } from './dimmer02/dimmer02.component';

const routes: Routes = [
  {
    path: 'dimmer-01',
    component: Dimmer01Component
  },
  {
    path: 'dimmer-02',
    component: Dimmer02Component
  }
]

@NgModule({
  declarations: [Dimmer01Component, Dimmer02Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DimmerModule { }
