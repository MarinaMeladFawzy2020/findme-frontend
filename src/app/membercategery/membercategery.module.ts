import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembercategeryRoutingModule } from './membercategery-routing.module';
import { AllcategeryComponent } from './allcategery/allcategery.component';
import { FamilycategeryComponent } from './familycategery/familycategery.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AllcategeryComponent,
    FamilycategeryComponent
  ],
  imports: [
    CommonModule,
    MembercategeryRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class MembercategeryModule { }
