import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaminacaoPage } from './contaminacao.page';

const routes: Routes = [
  {
    path: '',
    component: ContaminacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaminacaoPageRoutingModule {}
