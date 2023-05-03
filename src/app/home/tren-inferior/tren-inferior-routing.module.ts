import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrenInferiorPage } from './tren-inferior.page';

const routes: Routes = [
  {
    path: '',
    component: TrenInferiorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrenInferiorPageRoutingModule {}
