import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiperPageRoutingModule } from './swiper-routing.module';

import { SwiperPage } from './swiper.page';
import { MyModuleModule } from 'src/app/components/my-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyModuleModule,
    SwiperPageRoutingModule
  ],
  declarations: [SwiperPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperPageModule {}
