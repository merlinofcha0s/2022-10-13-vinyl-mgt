import {Routes} from "@angular/router";
import {ListVinylComponent} from "./vinyl/list-vinyl/list-vinyl.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";

export const ROUTES: Routes = [
  {path: '', component: ListVinylComponent},
  {path: 'users', component: ListUserComponent},
  {path: 'users/edit/:id', component: EditUserComponent}
];
