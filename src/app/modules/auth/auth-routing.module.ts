import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signInComponent } from "./sign-in/sign-in.component";

const routes: Routes = [
  {
    path: 'sign-in',
    component: signInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
