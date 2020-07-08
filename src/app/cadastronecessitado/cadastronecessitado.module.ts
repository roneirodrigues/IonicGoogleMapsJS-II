import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastronecessitadoPageRoutingModule } from './cadastronecessitado-routing.module';

import { CadastronecessitadoPage } from './cadastronecessitado.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastronecessitadoPageRoutingModule
  ],
  declarations: [CadastronecessitadoPage]
})
export class CadastronecessitadoPageModule { }
