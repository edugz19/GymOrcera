import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiitPage } from './hiit.page';

const routes: Routes = [
  {
    path: '',
    component: HiitPage
  },
  {
    path: 'rutina1',
    loadChildren: () => import('./rutina1/rutina1.module').then( m => m.Rutina1PageModule)
  },
  {
    path: 'rutina2',
    loadChildren: () => import('./rutina2/rutina2.module').then( m => m.Rutina2PageModule)
  },
  {
    path: 'rutina3',
    loadChildren: () => import('./rutina3/rutina3.module').then( m => m.Rutina3PageModule)
  },
  {
    path: 'rutina4',
    loadChildren: () => import('./rutina4/rutina4.module').then( m => m.Rutina4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiitPageRoutingModule {}
