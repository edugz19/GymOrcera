import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuadricepsPageRoutingModule } from './cuadriceps-routing.module';

import { CuadricepsPage } from './cuadriceps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuadricepsPageRoutingModule
  ],
  declarations: [CuadricepsPage]
})
export class CuadricepsPageModule {}
