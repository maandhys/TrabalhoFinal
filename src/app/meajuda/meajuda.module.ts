import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeajudaPageRoutingModule } from './meajuda-routing.module';

import { MeajudaPage } from './meajuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MeajudaPageRoutingModule
  ],
  declarations: [MeajudaPage]
})
export class MeajudaPageModule {}
