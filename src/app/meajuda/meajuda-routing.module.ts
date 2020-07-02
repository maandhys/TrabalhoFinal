import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeajudaPage } from './meajuda.page';

const routes: Routes = [
  {
    path: '',
    component: MeajudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeajudaPageRoutingModule {}
