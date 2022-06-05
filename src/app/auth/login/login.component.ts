import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x:string]:any;
  loginForm!:FormGroup

  constructor( private authService:AuthService,  private router:Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username':new FormControl('',[Validators.required ,Validators.email]),
      'password':new FormControl('',[Validators.required ]),
    })


  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.showErrorMessage = "";
    this.authService.checklogin(this.loginForm.value)
    .subscribe( data => {
            console.log(data);
            this.router.navigate(["/dashboard"]);
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Done successfully'});

          },error => {
           // console.log(error);
           this.showErrorMessage = "Invalid username or password";
           this.messageService.add({severity:'error', summary: 'Error', detail: this.showErrorMessage});

        });

  }
  

}
