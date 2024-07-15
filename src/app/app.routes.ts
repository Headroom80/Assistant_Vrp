import { Routes } from '@angular/router';
import {ClientListComponent} from "./client-list/client-list.component";
import {ClientAddComponent} from "./client-add/client-add.component";
import {MapComponent} from "./map/map.component";
import {TestAddressComponent} from "./test-address/test-address.component";

export const routes: Routes = [
  {path:"",component:ClientListComponent},
  {path:"add",component:ClientAddComponent},
  {path:"edit/:id",component:ClientAddComponent},
  {path:"map",component:MapComponent},
  {path:"test",component:TestAddressComponent},
];
