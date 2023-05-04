import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rutina4Page } from './rutina4.page';

const routes: Routes = [
  {
    path: '',
    component: Rutina4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rutina4PageRoutingModule {}
