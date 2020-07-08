import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroassociacaoPage } from './cadastroassociacao.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroassociacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroassociacaoPageRoutingModule {}
