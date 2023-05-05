import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuadricepsPage } from './cuadriceps.page';

const routes: Routes = [
  {
    path: '',
    component: CuadricepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuadricepsPageRoutingModule {}
