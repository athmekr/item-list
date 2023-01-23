import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { ItemsPageComponent } from "./components/items-page/items-page.component";
import {CreateItemComponent} from "./components/create-item/create-item.component";

const routes: Routes = [
  {
    path: '',
    component: ItemsPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'items',
    component: ItemsPageComponent
  },
  {
    path: 'create-item',
    component: CreateItemComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
