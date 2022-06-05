import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [
    ViewprofileComponent,
    EditprofileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PrimengModule,
    SharedModule,
    Ng2TelInputModule,  //npm install ng2-tel-input intl-tel-input --save

  ]
})
export class ProfileModule { }
