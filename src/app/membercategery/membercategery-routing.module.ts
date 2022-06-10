import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcategeryComponent } from './allcategery/allcategery.component';
import { DetailscategeryComponent } from './detailscategery/detailscategery.component';

const routes: Routes = [
  {path:'', component: AllcategeryComponent},
  {path:':id', component: DetailscategeryComponent}, //parse id


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembercategeryRoutingModule { }
