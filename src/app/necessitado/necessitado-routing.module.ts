import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NecessitadoPage } from './necessitado.page';

const routes: Routes = [
  {
    path: '',
    component: NecessitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NecessitadoPageRoutingModule {}
