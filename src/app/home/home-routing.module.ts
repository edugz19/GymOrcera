import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'calentamiento',
    loadChildren: () => import('./calentamiento/calentamiento.module').then( m => m.CalentamientoPageModule)
  },
  {
    path: 'tren-superior',
    loadChildren: () => import('./tren-superior/tren-superior.module').then( m => m.TrenSuperiorPageModule)
  },
  {
    path: 'tren-inferior',
    loadChildren: () => import('./tren-inferior/tren-inferior.module').then( m => m.TrenInferiorPageModule)
  },
  {
    path: 'abdomen',
    loadChildren: () => import('./abdomen/abdomen.module').then( m => m.AbdomenPageModule)
  },
  {
    path: 'cardio',
    loadChildren: () => import('./cardio/cardio.module').then( m => m.CardioPageModule)
  },
  {
    path: 'hiit',
    loadChildren: () => import('./hiit/hiit.module').then( m => m.HiitPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
