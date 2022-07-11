import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-producthome',
  templateUrl: './producthome.component.html',
  styleUrls: ['./producthome.component.css']
})
export class ProducthomeComponent implements OnInit {
  items!: MenuItem[];

  [x:string]:any;
  addToCartArray :any =[];
  checkdata:boolean=false;
  @Output() getResponse = new EventEmitter;  

    constructor(private dataApi:ProductService , private messageService: MessageService ) { }
  
    ngOnInit(): void {
    //   this.itemscarts = [
    //     {label1: '1'},
    //     {label: '2'}
    // ];


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
   // this.router.navigate([`products/productDetails/${_f.id}`]);
    }

    addToCart(_f:any){

      var z = localStorage.getItem("addToCartArray");
      if(z!=null){
      this.addToCartArray = JSON.parse(z);
    }
      
      console.log("addToCart");
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Add To Cart successfully'});
      this.addToCartArray.push(_f);
      console.log(this.addToCartArray);
      localStorage.setItem("addToCartArray" , JSON.stringify(this.addToCartArray));
      this.getResponse.emit(this.addToCartArray);

    }

}
