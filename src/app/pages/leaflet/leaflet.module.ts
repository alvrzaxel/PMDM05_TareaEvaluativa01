import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeafletPageRoutingModule } from './leaflet-routing.module';

import { LeafletPage } from './leaflet.page';
import { MyModuleModule } from 'src/app/components/my-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletPageRoutingModule,
    MyModuleModule
  ],
  declarations: [LeafletPage]
})
export class LeafletPageModule {}
