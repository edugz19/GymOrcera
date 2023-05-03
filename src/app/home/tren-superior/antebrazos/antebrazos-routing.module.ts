import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntebrazosPage } from './antebrazos.page';

const routes: Routes = [
  {
    path: '',
    component: AntebrazosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntebrazosPageRoutingModule {}
