import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociacoesPage } from './associacoes.page';

const routes: Routes = [
  {
    path: '',
    component: AssociacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociacoesPageRoutingModule {}
