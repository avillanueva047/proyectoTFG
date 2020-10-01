import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Alarm01Component } from './alarm01/alarm01.component';

const routes: Routes = [
  {
    path: 'alarm-01',
    component: Alarm01Component
  }
]

@NgModule({
  declarations: [Alarm01Component],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AlarmModule { }
