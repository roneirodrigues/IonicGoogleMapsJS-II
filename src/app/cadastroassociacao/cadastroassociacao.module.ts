import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroassociacaoPageRoutingModule } from './cadastroassociacao-routing.module';

import { CadastroassociacaoPage } from './cadastroassociacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroassociacaoPageRoutingModule
  ],
  declarations: [CadastroassociacaoPage]
})
export class CadastroassociacaoPageModule { }
