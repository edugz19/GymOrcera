import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrenInferiorPageRoutingModule } from './tren-inferior-routing.module';

import { TrenInferiorPage } from './tren-inferior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrenInferiorPageRoutingModule
  ],
  declarations: [TrenInferiorPage]
})
export class TrenInferiorPageModule {}
