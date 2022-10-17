import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './single-user/single-user.component';
import { ListUserComponent } from './list-user/list-user.component';



@NgModule({
  declarations: [
    SingleUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListUserComponent]
})
export class UserModule { }
