import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberlistService } from 'src/app/services/memberlist.service';
import { AddmemberComponent } from '../addmember/addmember.component';
import { FamilycategeryComponent } from '../familycategery/familycategery.component';

@Component({
  selector: 'app-allcategery',
  templateUrl: './allcategery.component.html',
  styleUrls: ['./allcategery.component.css']
})
export class AllcategeryComponent implements OnInit {
[x:string]:any;
checkdata:boolean=false;
@ViewChild('familycategery') familycategery!: FamilycategeryComponent;
@ViewChild('addMembers') addMembers!: AddmemberComponent;

  constructor(private dataApi: MemberlistService) { 
  }

  ngOnChanges(changes:any){
    // sessionStorage.setItem("indextabs" , 0);
  }
 

  ngOnInit(): void {
    this.activetabs=sessionStorage.getItem("indextabs");
    this.dataApi.getmemberCategory().subscribe(
      Response=> {
        console.log(Response)
        this.allCategory = Response;
      //  this.activetabs = 0
        this.checkdata = true;
         setTimeout(() => {
          this.familycategery.getDataCategory(this.allCategory[this.activetabs]);
          this.DataCateg =  this.familycategery.getDataCategory(this.allCategory[this.activetabs]);
         }, 2000)
        

      });
  }

  handleChange(e:any) {
    console.log(e)
    var indextabs = e.index;
    // this.familycategery.getDataCategory(this.allCategory[indextabs]);
    // console.log(this.familycategery.getDataCategory(this.allCategory[indextabs]));
    // this.DataCateg =  this.familycategery.getDataCategory(this.allCategory[indextabs]);
    sessionStorage.setItem("indextabs" , indextabs);
    this.activetabs=sessionStorage.getItem("indextabs");
  
    }

    addMember(){
    //  alert("ass")
     // console.log(this.allCategory[this.activetabs])
      this.addMembers.getTabCategory(this.allCategory[this.activetabs]);
    }
}
