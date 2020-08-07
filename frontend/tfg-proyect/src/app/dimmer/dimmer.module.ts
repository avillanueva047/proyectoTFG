import { NgModule } from '@angular/core';
import { Dimmer01Component } from './dimmer01/dimmer01.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dimmer-01',
    component: Dimmer01Component
  }
]

@NgModule({
  declarations: [Dimmer01Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DimmerModule { }
