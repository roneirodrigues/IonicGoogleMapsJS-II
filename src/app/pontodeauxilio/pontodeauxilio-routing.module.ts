import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontodeauxilioPage } from './pontodeauxilio.page';

const routes: Routes = [
  {
    path: '',
    component: PontodeauxilioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontodeauxilioPageRoutingModule {}
