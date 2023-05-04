import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rutina1Page } from './rutina1.page';

const routes: Routes = [
  {
    path: '',
    component: Rutina1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rutina1PageRoutingModule {}
