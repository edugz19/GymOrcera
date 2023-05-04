import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rutina4PageRoutingModule } from './rutina4-routing.module';

import { Rutina4Page } from './rutina4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rutina4PageRoutingModule
  ],
  declarations: [Rutina4Page]
})
export class Rutina4PageModule {}
