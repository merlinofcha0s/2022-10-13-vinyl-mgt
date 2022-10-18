import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleVinylComponent} from './single-vinyl/single-vinyl.component';
import { ListVinylComponent } from './list-vinyl/list-vinyl.component';
import { CountingButtonsComponent } from './counting-buttons/counting-buttons.component';
import {RouterModule} from "@angular/router";
import { EditVinylComponent } from './edit-vinyl/edit-vinyl.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SingleVinylComponent,
    ListVinylComponent,
    CountingButtonsComponent,
    EditVinylComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class VinylModule {
}
