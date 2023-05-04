import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rutina1PageRoutingModule } from './rutina1-routing.module';

import { Rutina1Page } from './rutina1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rutina1PageRoutingModule
  ],
  declarations: [Rutina1Page]
})
export class Rutina1PageModule {}
