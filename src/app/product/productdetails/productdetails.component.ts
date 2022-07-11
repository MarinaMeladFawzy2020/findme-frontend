import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
[x:string]:any;
  constructor(private sanitizer:DomSanitizer , private activeRoute: ActivatedRoute , 
     private dataApi : ProductService ) { 
        console.log(this.activeRoute.snapshot.params.id);
        console.log(parseInt(this.activeRoute.snapshot.params.id));
        this.productID = parseInt(this.activeRoute.snapshot.params.id);
        this.productDetails();

     }

  ngOnInit(): void {

  }


  productDetails(){
    this.checkData = false;
    this.images_path = localStorage.getItem("images_path");
    this.dataApi.getproductDetails(this.productID).subscribe(
      Response=> {
        console.log(Response)
        if(Response.clientMessage == "SUCCESS"){
        this.length = Response.length;
        this.checkData = true;
        this.dataDetails = Response.body;

        // this.p_name = this.sanitizer.bypassSecurityTrustHtml(this.dataDetails.p_name);    
        }else{
            this.checkNoFound = true;
            this.emptyMessg =  Response.clientMessage;
        }
     
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
