import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FronthomeRoutingModule } from './fronthome-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FronthomeRoutingModule,
    SharedModule
  ]
})
export class FronthomeModule { }
