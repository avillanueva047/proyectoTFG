import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightRgb01Component } from './light-rgb01/light-rgb01.component';

const routes: Routes = [
  {
    path: 'light-rgb-01',
    component: LightRgb01Component
  }
]

@NgModule({
  declarations: [LightRgb01Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LightRGBModule { }
