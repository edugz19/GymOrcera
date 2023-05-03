import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrapecioPage } from './trapecio.page';

const routes: Routes = [
  {
    path: '',
    component: TrapecioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrapecioPageRoutingModule {}
