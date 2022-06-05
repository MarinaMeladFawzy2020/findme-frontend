import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ViewprofileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class ProfileModule { }
