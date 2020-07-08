import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastropontodeauxilioPageRoutingModule } from './cadastropontodeauxilio-routing.module';

import { CadastropontodeauxilioPage } from './cadastropontodeauxilio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastropontodeauxilioPageRoutingModule
  ],
  declarations: [CadastropontodeauxilioPage]
})
export class CadastropontodeauxilioPageModule {}
