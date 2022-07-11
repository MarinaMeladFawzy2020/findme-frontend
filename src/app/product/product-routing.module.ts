import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductComponent } from './allproduct/allproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {path:'', component: AllproductComponent},
  {path:'productDetails/:id', component: ProductdetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
