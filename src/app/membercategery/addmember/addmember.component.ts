import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MemberlistService } from 'src/app/services/memberlist.service';
declare var $: any

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  [x:string]:any;
  myForm!:FormGroup
  AllgenderTYPE = [{"name":"Female" , "value":"F"} , {"name":"Male" , "value":"M"}]
  constructor( private dataApi : MemberlistService , private messageService: MessageService) {
    this.UserInfo = sessionStorage.getItem("UserInfo")
    this.gardId= JSON.parse(this.UserInfo).gardId;
   }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'memberName':new FormControl('',[Validators.required]), //Validators.pattern("[0-9]{11}")
      'age':new FormControl('',[Validators.required]),
      'gender':new FormControl('',[Validators.required]),
      'bloodType':new FormControl(''),
      'healthInfo':new FormControl(''),
      'allergies':new FormControl(''),
      'languages':new FormControl(''),
    })


  }

  onSubmit(){
    this.memberName = this.myForm.value?.memberName
    this.obj = {
      "fmId": null,
      "gardId": this.gardId,
      "memberName": this.myForm.value?.memberName,
      "age": this.myForm.value?.age,
      "gender": this.myForm.value?.gender?.value,
      "bloodType": this.myForm.value?.bloodType,
      "healthInfo":this.myForm.value?.healthInfo,
      "allergies": this.myForm.value?.allergies,
      "image": "",
      "languages":this.myForm.value?.languages,  
      "memberCat": this.dataCat.mc_id,
      "statusCd": "",
      "createDate": "",
      "createUser": null,
      "updateDate": null,
      "updateUser": null,
  }
  console.log(this.obj)
    this.dataApi.createMember(this.obj).subscribe((result:any)=>{
      console.log(result);
       if(result.clientMessage == "SUCCESS" ){       
        bootbox.alert({
         title: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+"Success Message"+"</span>  </i>",
         message: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+"Success Message"+"</span>  </i>",
         callback: function(){
             $('#addMember').modal('hide');
            window.location.reload();
         }
     });
       }else{ 
         this.messageService.add({severity:'error', summary: 'Error', detail: result.status});
       }
     },(error:any)=>{
      console.log(error)
      this.messageService.add({severity:'error', summary: 'Error', detail:error.error.status});
       
     })
   }

   getTabCategory(_f1:any){
    console.log(_f1)
    this.myForm.reset();
    this.dataCat = _f1;
   }
 
   reset(){
    this.myForm.reset();
  }


}
