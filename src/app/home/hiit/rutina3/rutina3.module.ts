import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rutina3PageRoutingModule } from './rutina3-routing.module';

import { Rutina3Page } from './rutina3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rutina3PageRoutingModule
  ],
  declarations: [Rutina3Page]
})
export class Rutina3PageModule {}
