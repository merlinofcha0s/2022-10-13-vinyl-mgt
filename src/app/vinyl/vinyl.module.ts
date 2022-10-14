import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleVinylComponent} from './single-vinyl/single-vinyl.component';
import { ListVinylComponent } from './list-vinyl/list-vinyl.component';

@NgModule({
  declarations: [
    SingleVinylComponent,
    ListVinylComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListVinylComponent]
})
export class VinylModule {
}
