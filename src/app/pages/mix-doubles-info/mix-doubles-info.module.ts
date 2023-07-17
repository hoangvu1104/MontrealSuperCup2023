import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixDoublesInfoPageRoutingModule } from './mix-doubles-info-routing.module';

import { MixDoublesInfoPage } from './mix-doubles-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixDoublesInfoPageRoutingModule
  ],
  declarations: [MixDoublesInfoPage]
})
export class MixDoublesInfoPageModule {}
