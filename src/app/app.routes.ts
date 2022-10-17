import {Routes} from "@angular/router";
import {ListVinylComponent} from "./vinyl/list-vinyl/list-vinyl.component";
import {ListUserComponent} from "./user/list-user/list-user.component";

export const ROUTES: Routes = [
  {path: '', component: ListVinylComponent},
  {path: 'users', component: ListUserComponent}
];
