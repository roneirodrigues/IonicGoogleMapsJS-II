import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FilterDataPipe } from './../pipes/filter.pipe';





@NgModule({
  declarations: [FilterDataPipe],
  imports: [IonicModule],
  exports: [FilterDataPipe]
})
export class PipesModule { }
