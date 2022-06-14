import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProfileService } from 'src/app/services/profile.service';
declare var $: any

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  myForm!: FormGroup;
  [x:string]:any;
  edit:boolean=false;
  @Output() getResponse = new EventEmitter;

  constructor(private dataApi: ProfileService , private messageService: MessageService) {
    this.UserInfo = sessionStorage.getItem("UserInfo")
    this.password= JSON.parse(this.UserInfo).password;
   }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'gardName':new FormControl('',[Validators.required]),
      'createUser':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required ,Validators.email]), //
      'mobCountryCd':new FormControl('',[Validators.required]),
      'mobileNo':new FormControl('',[Validators.required , Validators.pattern("[0-9]{11}")]),
      'password':new FormControl(''),
      'city':new FormControl(''),
      'country':new FormControl(''),
      'address':new FormControl(''),
      'statusCode':new FormControl('',[Validators.required]),

    })
  }

  

  dataprofile(_f:any){
    this.edit = true;
    this.data = _f;
  }
  onSubmit(){
    console.log(this.myForm.value);
    this.obj = {
      "gardId": this.data.gardId,
      "gardName": this.myForm.value?.gardName,
      "email": this.myForm.value?.email,
      "username": this.myForm.value?.username,
      "country": this.myForm.value?.country,
      "city": this.myForm.value?.city,
      "address": this.myForm.value?.address,
      "mobCountryCd":this.myForm.value?.mobCountryCd,
      "mobileNo":this.myForm.value?.mobileNo,
      "addCountryCd":this.myForm.value?.addCountryCd,
      "addMobileNo":this.myForm.value?.addMobileNo,
      "createDate": this.myForm.value?.createDate,
      "createUser": this.myForm.value?.createUser,
      "updateDate": null,
      "updateUser": null,
      "statusCode": this.myForm.value?.statusCode,
      "languages": null,
      "password": this.password,
      "token": "SmCHr1dGfaaVlOdBrCw3",
      "tokenTimestamp": "1654369135104",
      "enabled": true,
      "authorities": null,
      "accountNonExpired": true,
      "accountNonLocked": true,
      "credentialsNonExpired": true
  }
    this.dataApi.updateGuardian(this.data.gardId, this.obj , true).subscribe((result:any)=>{
      console.log(result)
 
       // this.messageService.add({severity:'success', summary: 'Success', detail: result.message});
      this.getResponse.emit("hh");

        bootbox.alert({
          title: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+"Success Message"+"</span>  </i>",
          message: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+"Success Message"+"</span>  </i>",
          callback: function(){
            $('#editprofile').modal('hide');
          }
      });


     
      
    },(error:any)=>{
      console.log(error)
      this.messageService.add({severity:'error', summary: 'Error', detail:"error"});
      
    })


  }

  reset(){
    this.getResponse.emit("edit");
   }


}
