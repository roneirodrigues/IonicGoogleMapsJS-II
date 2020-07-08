import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontodeauxilioPageRoutingModule } from './pontodeauxilio-routing.module';

import { PontodeauxilioPage } from './pontodeauxilio.page';
import { PipesModule } from './../pipes/pipes.module';



@NgModule({
  imports: [PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PontodeauxilioPageRoutingModule
  ],
  declarations: [PontodeauxilioPage]
})
export class PontodeauxilioPageModule {}
