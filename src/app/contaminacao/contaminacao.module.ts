import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaminacaoPageRoutingModule } from './contaminacao-routing.module';

import { ContaminacaoPage } from './contaminacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaminacaoPageRoutingModule
  ],
  declarations: [ContaminacaoPage]
})
export class ContaminacaoPageModule {}
