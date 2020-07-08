import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NecessitadoPageRoutingModule } from './necessitado-routing.module';

import { NecessitadoPage } from './necessitado.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NecessitadoPageRoutingModule
  ],
  declarations: [NecessitadoPage]
})
export class NecessitadoPageModule {}
