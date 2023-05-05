import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsquiotibialesPageRoutingModule } from './isquiotibiales-routing.module';

import { IsquiotibialesPage } from './isquiotibiales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsquiotibialesPageRoutingModule
  ],
  declarations: [IsquiotibialesPage]
})
export class IsquiotibialesPageModule {}
