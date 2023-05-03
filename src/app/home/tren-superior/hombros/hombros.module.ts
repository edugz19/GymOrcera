import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HombrosPageRoutingModule } from './hombros-routing.module';

import { HombrosPage } from './hombros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HombrosPageRoutingModule
  ],
  declarations: [HombrosPage]
})
export class HombrosPageModule {}
