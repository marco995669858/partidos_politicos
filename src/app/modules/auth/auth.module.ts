import { NgModule } from '@angular/core';

import { AuthRoutingModule} from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { signInComponent } from "./sign-in/sign-in.component";

@NgModule({
  declarations: [
    signInComponent
  ],
  imports: [
    SharedModule,  
    AuthRoutingModule  
  ]
})
export class AuthModule { }
