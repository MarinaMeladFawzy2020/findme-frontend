import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcategeryComponent } from './allcategery/allcategery.component';

const routes: Routes = [
  {path:'', component: AllcategeryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembercategeryRoutingModule { }
