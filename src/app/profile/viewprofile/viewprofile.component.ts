import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
[x:string]:any;
viewProfile:boolean = false;

  constructor(private dataApi:ProfileService) { 
    this.UserInfo = sessionStorage.getItem("UserInfo")
   this.gardId= JSON.parse(this.UserInfo).gardId;
    
  }

  ngOnInit(): void {
  //   this.viewProfile = true;

  //   this.dataprofile  = {
  //     "gardId": 1,
  //     "gardName": "Masoud Ahmed T",
  //     "country": "190",
  //     "city": "Riyadh - الرياض",
  //     "address": "عبد الحق السهمي",
  //     "mobCountryCd": "966",
  //     "mobileNo": "54 080 5491",
  //     "addCountryCd": "20",
  //     "addMobileNo": "101717731",
  //     "createDate": "2022-03-27T00:00:00.000+00:00",
  //     "createUser": "",
  //     "updateDate": null,
  //     "updateUser": null,
  //     "statusCode": "A",
  //     "languages": "Arabic",
  //     "email": "mas.ahmed22@gmail.com",
  //     "password": "EC6A6536CA304EDF844D1D248A4F08DC",
  //     "token": "Y5LZfJkDXPMBzEsmXoAo",
  //     "tokenTimestamp": "1654366034732",
  //     "enabled": true,
  //     "username": "mas.ahmed22@gmail.com",
  //     "authorities": null,
  //     "accountNonExpired": true,
  //     "accountNonLocked": true,
  //     "credentialsNonExpired": true
  // }
    this.dataApi.getGuardianByID(this.gardId).subscribe(
      Response=> {
        console.log(Response)
        this.viewProfile = true;
        this.dataprofile = Response;
      },
      (error) => {                              
        console.log(error);
      // bootbox.alert({title: "<span style='color:#a33;font-weight: 500; font-size: 16px'>" + "Warning message" + "</span>", message: "<span style='color:Black;font-weight: 500; font-size: 16px'>" + "No data found" + "</span>"});
      }
     );

  }

}
