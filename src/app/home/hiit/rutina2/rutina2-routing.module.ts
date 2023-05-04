import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rutina2Page } from './rutina2.page';

const routes: Routes = [
  {
    path: '',
    component: Rutina2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rutina2PageRoutingModule {}
