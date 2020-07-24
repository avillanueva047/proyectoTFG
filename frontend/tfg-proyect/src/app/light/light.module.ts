import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Light01Component } from './light01/light01.component';
import { Light02Component } from './light02/light02.component';

const routes: Routes = [
  {
    path: 'light-01',
    component: Light01Component
  },
  {
    path: 'light-02',
    component: Light02Component
  }
]

@NgModule({
  declarations: [Light01Component, Light02Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LightModule { }
