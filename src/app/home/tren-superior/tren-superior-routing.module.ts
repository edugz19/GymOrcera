import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrenSuperiorPage } from './tren-superior.page';

const routes: Routes = [
  {
    path: '',
    component: TrenSuperiorPage
  },
  {
    path: 'pecho',
    loadChildren: () => import('./pecho/pecho.module').then( m => m.PechoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrenSuperiorPageRoutingModule {}
