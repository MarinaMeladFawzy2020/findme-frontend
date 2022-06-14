import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {AuthGuard} from './interceptor/auth.guard';
const routes: Routes = [
  // {path:'homepage',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},

  {path:'dashboard',component:SidebarComponent,children:[
    {path:'',loadChildren:()=>import('./dashboard/dashboard.module').then(module=>module.DashboardModule) ,canActivate:[AuthGuard]} 
  ]},

  {path:'MemberList',component:SidebarComponent,children:[
    {path:'',loadChildren:()=>import('./membercategery/membercategery.module').then(module=>module.MembercategeryModule)  ,canActivate:[AuthGuard]} 
  ]},

  {path:'viewProfile',component:SidebarComponent,children:[
    {path:'',loadChildren:()=>import('./profile/profile.module').then(module=>module.ProfileModule)  ,canActivate:[AuthGuard]} 
  ]},

  {path:'login',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},

  //web Home Page
  {path:'',loadChildren:()=>import('./fronthome/fronthome.module').then(m=>m.FronthomeModule)},
  {path:'**',redirectTo:'',pathMatch:'full'},
  


  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
