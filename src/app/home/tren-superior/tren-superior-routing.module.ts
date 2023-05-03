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
  },
  {
    path: 'antebrazos',
    loadChildren: () => import('./antebrazos/antebrazos.module').then( m => m.AntebrazosPageModule)
  },
  {
    path: 'trapecio',
    loadChildren: () => import('./trapecio/trapecio.module').then( m => m.TrapecioPageModule)
  },
  {
    path: 'triceps',
    loadChildren: () => import('./triceps/triceps.module').then( m => m.TricepsPageModule)
  },
  {
    path: 'dorsales',
    loadChildren: () => import('./dorsales/dorsales.module').then( m => m.DorsalesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrenSuperiorPageRoutingModule {}
