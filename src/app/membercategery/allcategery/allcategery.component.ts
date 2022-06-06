import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberlistService } from 'src/app/services/memberlist.service';
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

  constructor(private dataApi: MemberlistService) { }

  ngOnInit(): void {
    this.dataApi.getmemberCategory().subscribe(
      Response=> {
        console.log(Response)
        this.allCategory = Response;
        this.checkdata = true;
         setTimeout(() => {
          this.familycategery.getDataCategory(this.allCategory[0]);
         }, 2000)
        

      });
  }

  handleChange(e:any) {
    console.log(e)
    var indextabs = e.index;
    this.familycategery.getDataCategory(this.allCategory[indextabs]);
    sessionStorage.setItem("indextabs" , indextabs);
    this.activetabs=sessionStorage.getItem("indextabs");
  
    }

}
