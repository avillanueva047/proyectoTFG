import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Louver01Component } from './louver01/louver01.component';
import { Louver02Component } from './louver02/louver02.component';

const routes: Routes = [
  {
    path: 'louver-01',
    component: Louver01Component
  },
  {
    path: 'louver-02',
    component: Louver02Component
  }
]

@NgModule({
  declarations: [Louver01Component, Louver02Component],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LouverModule { }
