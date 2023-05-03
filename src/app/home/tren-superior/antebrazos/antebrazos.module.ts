import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntebrazosPageRoutingModule } from './antebrazos-routing.module';

import { AntebrazosPage } from './antebrazos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntebrazosPageRoutingModule
  ],
  declarations: [AntebrazosPage]
})
export class AntebrazosPageModule {}
