import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemelosPage } from './gemelos.page';

const routes: Routes = [
  {
    path: '',
    component: GemelosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemelosPageRoutingModule {}
