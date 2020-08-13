import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Wave01Component } from './wave01/wave01.component';

const routes: Routes = [
  {
    path: 'wave-01',
    component: Wave01Component
  }
]

@NgModule({
  declarations: [Wave01Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WaveModule { }
