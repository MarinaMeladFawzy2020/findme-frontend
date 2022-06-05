import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
[x:string]:any;
  constructor(private authService:AuthService  , private router:Router) { }

  ngOnInit(): void {
     this.UserInfo = sessionStorage.getItem("UserInfo")
     //console.log(JSON.parse(this.UserInfo))
     this.username= JSON.parse(this.UserInfo).gardName;
  }

  viewProfile(){ 
     this.router.navigate(["/viewProfile"]);
   }

  Logout(){ 
   this.authService.logoutUser()
    this.router.navigate(["/"]);
  }
}
