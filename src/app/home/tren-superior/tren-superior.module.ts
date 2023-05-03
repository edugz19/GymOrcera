import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrenSuperiorPageRoutingModule } from './tren-superior-routing.module';

import { TrenSuperiorPage } from './tren-superior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrenSuperiorPageRoutingModule
  ],
  declarations: [TrenSuperiorPage]
})
export class TrenSuperiorPageModule {}
