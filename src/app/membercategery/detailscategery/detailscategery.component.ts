import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberlistService } from 'src/app/services/memberlist.service';

@Component({
  selector: 'app-detailscategery',
  templateUrl: './detailscategery.component.html',
  styleUrls: ['./detailscategery.component.css']
})
export class DetailscategeryComponent implements OnInit {
[x:string]:any;
checkData :boolean = false; 
  constructor(private activeRoute: ActivatedRoute , private dataApi : MemberlistService ) { }

  ngOnInit(): void {

    console.log(this.activeRoute.snapshot.params.id);
    console.log(parseInt(this.activeRoute.snapshot.params.id));
    this.fmId = parseInt(this.activeRoute.snapshot.params.id);
    this.getGardMembersCategory(this.fmId);

    
  }

  getGardMembersCategory(_fmId:any){
    this.dataApi.getFamilyMember(_fmId).subscribe(
      Response=> {
        console.log(Response)
        this.length = Response.length;
        this.checkData = true;
        this.CategoryDetails = Response;
      },
      (error) => {                              
        console.log(error);
        if(error.error.success == false){
          this.checkNoFound = true;
          this.emptyMessg = "No Data Found";
        }

      // bootbox.alert({title: "<span style='color:#a33;font-weight: 500; font-size: 16px'>" + "Warning message" + "</span>", message: "<span style='color:Black;font-weight: 500; font-size: 16px'>" + "No data found" + "</span>"});
      });
    }

}
