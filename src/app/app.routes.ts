import { Routes } from '@angular/router';
import {ClientListComponent} from "./client-list/client-list.component";
import {ClientAddComponent} from "./client-add/client-add.component";

export const routes: Routes = [
  {path:"",component:ClientListComponent},
  {path:"add",component:ClientAddComponent},
  {path:"edit/:id",component:ClientAddComponent},
];
