import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SignupComponent } from './signup/signup.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SharedModule } from '../shared/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    SharedModule,
    Ng2TelInputModule,  //npm install ng2-tel-input intl-tel-input --save


  ]
})
export class AuthModule { }
