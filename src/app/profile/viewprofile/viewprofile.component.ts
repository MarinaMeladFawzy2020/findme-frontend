import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { EditprofileComponent } from '../editprofile/editprofile.component';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
[x:string]:any;
viewProfile:boolean = false;
@ViewChild('editprofile') editprofile!: EditprofileComponent;

  constructor(private dataApi:ProfileService) { 
    this.UserInfo = sessionStorage.getItem("UserInfo")
   this.gardId= JSON.parse(this.UserInfo).gardId;
    
  }

  ngOnInit(): void {
    this.dataApi.getGuardianByID(this.gardId).subscribe(
      Response=> {
        console.log(Response)
        this.viewProfile = true;
        this.dataprofile = Response;
      },
      (error) => {                              
        console.log(error);
        if(error.error.success == false){
          this.checkNoFound = true;
          this.emptyMessg = "No Data Found";
        }
      // bootbox.alert({title: "<span style='color:#a33;font-weight: 500; font-size: 16px'>" + "Warning message" + "</span>", message: "<span style='color:Black;font-weight: 500; font-size: 16px'>" + "No data found" + "</span>"});
      }
     );

  }

  editprofiles(){
    this.editprofile.dataprofile(this.dataprofile);
      
    
  }

}
