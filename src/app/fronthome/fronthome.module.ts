import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FronthomeRoutingModule } from './fronthome-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { ProducthomeComponent } from './producthome/producthome.component';
import { AllcartsComponent } from './allcarts/allcarts.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ProducthomeComponent,
    AllcartsComponent
  ],
  imports: [
    CommonModule,
    FronthomeRoutingModule,
    SharedModule
  ]
})
export class FronthomeModule { }
