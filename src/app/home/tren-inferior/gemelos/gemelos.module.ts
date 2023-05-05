import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemelosPageRoutingModule } from './gemelos-routing.module';

import { GemelosPage } from './gemelos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemelosPageRoutingModule
  ],
  declarations: [GemelosPage]
})
export class GemelosPageModule {}
