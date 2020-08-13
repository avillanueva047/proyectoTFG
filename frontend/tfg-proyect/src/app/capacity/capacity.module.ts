import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Capacity01Component } from './capacity01/capacity01.component';

const routes: Routes = [
  {
    path: 'capacity-01',
    component: Capacity01Component
  }
]

@NgModule({
  declarations: [Capacity01Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class CapacityModule { }
