import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcarts',
  templateUrl: './allcarts.component.html',
  styleUrls: ['./allcarts.component.css']
})
export class AllcartsComponent implements OnInit {
[x:string]:any
  constructor() { }

  ngOnInit(): void {
    this.images_path = localStorage.getItem("images_path");
    var z = localStorage.getItem("addToCartArray");
    if(z!=null){
    this.allCart = JSON.parse(z);
    console.log(this.allCart)
    this.allCartLength = this.allCart.length;
    console.log( this.allCartLength)
    }else{
      //alert("ll")
      this.allCart = [];
      this.allCartLength = 0;
    }
  }

  setcountercart(allC:any){
    this.allCart = allC;
    this.allCartLength = this.allCart.length;
    console.log( this.allCart)
   
  }

  checkout(){
    
  }
}
