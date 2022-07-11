import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
[x:string]:any;
checkdata:boolean=false;

  constructor(private dataApi:ProductService , private router:Router) { }

  ngOnInit(): void {
    this.images_path = localStorage.getItem("images_path");
    this.dataApi.getAllproduct().subscribe(
      Response=> {
        console.log(Response)
        if(Response.statusCode == 200){
          this.allProduct = Response.body;
          this.checkdata = true;
        }else{
          bootbox.alert({title: "<span style='color:#a33;font-weight: 500; font-size: 16px'>" + "Warning message" + "</span>", message: "<span style='color:Black;font-weight: 500; font-size: 16px'>" + "Contact Your Adminstrator" + "</span>"});
        }
    
      },
      (error) => {                              
        console.log(error);
        bootbox.alert({title: "<span style='color:#a33;font-weight: 500; font-size: 16px'>" + "Warning message" + "</span>", message: "<span style='color:Black;font-weight: 500; font-size: 16px'>" + "Contact Your Adminstrator" + "</span>"});
      }
      );
  }


  showDetails(_f:any){
  console.log(_f);
  this.router.navigate([`products/productDetails/${_f.id}`]);
  //this.router.navigate([`productDetails/${_f.id}`]);

  }
}
