import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MemberlistService } from 'src/app/services/memberlist.service';

@Component({
  selector: 'app-familycategery',
  templateUrl: './familycategery.component.html',
  styleUrls: ['./familycategery.component.css']
})
export class FamilycategeryComponent implements OnInit  {
  @Input() catInput! :any;
  [x:string]:any;

  constructor(private dataApi: MemberlistService) {
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
   // this.getGardMembersCategory(data.mc_id);

  }

  getGardMembersCategory(_catIDInputP:any){
  this.dataApi.getGardMembersCategory(_catIDInputP).subscribe(
    Response=> {
      console.log(Response)
      this.length = Response.length;
      this.Category = Response;
    });
  }

}
