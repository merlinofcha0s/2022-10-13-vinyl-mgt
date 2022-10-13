import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleVinylComponent} from './single-vinyl/single-vinyl.component';

@NgModule({
  declarations: [
    SingleVinylComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SingleVinylComponent]
})
export class VinylModule {
}
