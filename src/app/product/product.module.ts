import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AllproductComponent } from './allproduct/allproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AllproductComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
