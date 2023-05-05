import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrenInferiorPage } from './tren-inferior.page';

const routes: Routes = [
  {
    path: '',
    component: TrenInferiorPage
  },
  {
    path: 'cuadriceps',
    loadChildren: () => import('./cuadriceps/cuadriceps.module').then( m => m.CuadricepsPageModule)
  },
  {
    path: 'gemelos',
    loadChildren: () => import('./gemelos/gemelos.module').then( m => m.GemelosPageModule)
  },
  {
    path: 'isquiotibiales',
    loadChildren: () => import('./isquiotibiales/isquiotibiales.module').then( m => m.IsquiotibialesPageModule)
  },
  {
    path: 'gluteos',
    loadChildren: () => import('./gluteos/gluteos.module').then( m => m.GluteosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrenInferiorPageRoutingModule {}
