import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsquiotibialesPage } from './isquiotibiales.page';

const routes: Routes = [
  {
    path: '',
    component: IsquiotibialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsquiotibialesPageRoutingModule {}
