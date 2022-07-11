import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HomepageService } from 'src/app/services/homepage.service';
import { AllcartsComponent } from '../allcarts/allcarts.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
[x:string]:any
ConnectForm!:FormGroup
checkData : boolean = false;
Alldata :any = {};
@ViewChild('allcart') allcart!: AllcartsComponent;

  constructor( private dataApi: HomepageService , private messageService: MessageService) { 

  }
  ngOnInit(): void {
    this.images_path = localStorage.getItem("images_path");
 


    this.ConnectForm = new FormGroup({
      'fname':new FormControl('',[Validators.required]),
    })
  
   this.dataApi.getAllWebPage().subscribe(
    Response=>{
      console.log(Response)
      this.Alldata = Response;
         // getAllWebPage
      localStorage.setItem("meta_description_home" , this.Alldata.meta_description_home )
      localStorage.setItem("meta_keyword_home" ,  this.Alldata.meta_keyword_home )
      localStorage.setItem("meta_title_home" ,  this.Alldata.meta_title_home )
      localStorage.setItem("images_path" ,  this.Alldata.images_path )
    },
      (error) => {
        console.log(error);
        // bootbox.alert({title: "<span style='color:#a33;font-weight: 500; font-size: 16px'>" + "Error message" + "</span>", message: "<span style='color:Black;font-weight: 500; font-size: 16px'>" +"" + "</span>"});
      }
   );


   this.dataApi.getAllWebsocial().subscribe(
    Response=>{
      console.log(Response)
      this.Alldatasocial = Response;
    });
  }

  onSubmit(){
   this.confirmMessage =  this.Alldata.receive_email_thank_you_message 
   this.messageService.add({severity:'success', summary: 'Success', detail: this.confirmMessage});

  }

  getaddproduct(allCart:any){
    this.allcart.setcountercart(allCart);
  }
}
