import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiitPageRoutingModule } from './hiit-routing.module';

import { HiitPage } from './hiit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiitPageRoutingModule
  ],
  declarations: [HiitPage]
})
export class HiitPageModule {}
