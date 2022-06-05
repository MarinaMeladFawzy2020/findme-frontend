import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x:string]:any;
  signupForm!:FormGroup
  mobCountryCd ="20"
  constructor( private authService:AuthService,  private router:Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'gardName':new FormControl('',[Validators.required ]),
      'createUser':new FormControl('',[Validators.required ]),
      'email':new FormControl('',[Validators.required ,Validators.email]), //
      'password':new FormControl('',[Validators.required ]),
      'mobileNo':new FormControl('',[Validators.required , Validators.pattern("[0-9]{11}") ]),
    })

  }


  oncountryChange(event:any){
    console.log(event);
    console.log(event.dialCode);
   // alert(event.dialCode)
    this.mobCountryCd = event.dialCode;
  }

  onSubmit(){
    this.showErrorMessage = "";
    this.mesgSuccess = false
    this.mesgErorr = false
    console.log(this.signupForm.value);
    var obj = {
      "gardName": this.signupForm.value.gardName,
      "mobCountryCd": "+"+this.mobCountryCd,
      "mobileNo": this.signupForm.value.mobileNo,
      "createUser": this.signupForm.value.createUser,
      "email":this.signupForm.value.email,
      "password": this.signupForm.value.password
    };
    this.authService.signuplogin(obj)
    .subscribe( Response => {
      console.log(Response)
      if(Response.success == true){
        this.mesgSuccess = true
        this.showErrorMessage = Response.message;
        this.messageService.add({severity:'success', summary: 'Success', detail: Response.message});
      }else if(Response.success == false){
        this.mesgErorr = true
        this.showErrorMessage = Response.message;
        this.messageService.add({severity:'error', summary: 'Error', detail: Response.message});
      }
    },error => {
      console.log(error);
      this.mesgErorr = true
       this.showErrorMessage = error.error.message;
       this.messageService.add({severity:'error', summary: 'Error', detail: this.showErrorMessage});

      
  });
    


  }
  

}


