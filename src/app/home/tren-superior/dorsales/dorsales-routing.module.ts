import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DorsalesPage } from './dorsales.page';

const routes: Routes = [
  {
    path: '',
    component: DorsalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DorsalesPageRoutingModule {}
