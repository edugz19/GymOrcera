import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rutina2PageRoutingModule } from './rutina2-routing.module';

import { Rutina2Page } from './rutina2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rutina2PageRoutingModule
  ],
  declarations: [Rutina2Page]
})
export class Rutina2PageModule {}
