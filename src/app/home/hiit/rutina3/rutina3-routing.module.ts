import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rutina3Page } from './rutina3.page';

const routes: Routes = [
  {
    path: '',
    component: Rutina3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rutina3PageRoutingModule {}
