import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberlistService } from 'src/app/services/memberlist.service';

@Component({
  selector: 'app-familycategery',
  templateUrl: './familycategery.component.html',
  styleUrls: ['./familycategery.component.css']
})
export class FamilycategeryComponent implements OnInit  {
  @Input() catInput! :any;
  [x:string]:any;

  constructor(private dataApi: MemberlistService , private router : Router) {
    this.UserInfo = sessionStorage.getItem("UserInfo")
    this.gardId= JSON.parse(this.UserInfo).gardId;
   }

  ngOnInit(): void {
    this.catIDInputP = this.catInput.mc_id;
  //  alert(this.catIDInputP)
   this.getGardMembersCategory(this.catIDInputP);
  }
  ngOnChanges(changes:any){
  }
 


  getDataCategory(data:any){
    console.log(this.catIDInputP)
    console.log("getDataCategory");
    console.log(data)
  // alert("j")
   // this.getGardMembersCategory(data.mc_id);

  }

  getGardMembersCategory(_catIDInputP:any){
    //send GardID login 
  this.dataApi.getGardMembersCategory(this.gardId).subscribe(
    Response=> {
      console.log(Response)
      this.Alllength = Response.length;
      this.AllCategory = Response;
      let newArr = this.AllCategory.filter((e: { memberCat: any; }) => e.memberCat == _catIDInputP)
      this.Category = newArr;
      this.length = this.Category.length;
      console.log("oneCategory")
      console.log(this.Category)

    });
  }

  getDetails(_f:any){
    console.log(_f);
    this.router.navigate([`MemberList/${_f.fmId}`]);

  }
}
