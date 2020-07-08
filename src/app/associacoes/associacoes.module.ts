import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociacoesPageRoutingModule } from './associacoes-routing.module';

import { AssociacoesPage } from './associacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociacoesPageRoutingModule
  ],
  declarations: [AssociacoesPage]
})
export class AssociacoesPageModule {}
