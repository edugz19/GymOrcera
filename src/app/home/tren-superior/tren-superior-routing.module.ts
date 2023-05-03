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
  },
  {
    path: 'biceps',
    loadChildren: () => import('./biceps/biceps.module').then( m => m.BicepsPageModule)
  },
  {
    path: 'hombros',
    loadChildren: () => import('./hombros/hombros.module').then( m => m.HombrosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrenSuperiorPageRoutingModule {}
