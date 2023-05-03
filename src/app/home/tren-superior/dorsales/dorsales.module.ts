import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DorsalesPageRoutingModule } from './dorsales-routing.module';

import { DorsalesPage } from './dorsales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DorsalesPageRoutingModule
  ],
  declarations: [DorsalesPage]
})
export class DorsalesPageModule {}
