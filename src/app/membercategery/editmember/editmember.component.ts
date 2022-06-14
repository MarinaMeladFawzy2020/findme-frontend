import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MemberlistService } from 'src/app/services/memberlist.service';
declare var $: any
@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.css']
})
export class EditmemberComponent implements OnInit {
  [x:string]:any;
  myForm!:FormGroup
  dataDetails:any=[]; 
  AllgenderTYPE = [{"name":"Female" , "value":"F"} , {"name":"Male" , "value":"M"}]
  @Output() getResponse1 = new EventEmitter;

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

  getDataFromDetails(_f:any){
    console.log(_f);
    this.dataDetails = _f;
    if(this.dataDetails.gender == "F"){
      this.selectedgenderType={"name":"Female" , "value":"F"} 
    }
    if(this.dataDetails.gender == "M"){
      this.selectedgenderType={"name":"Male" , "value":"M"} 
    }
  }

  onSubmit(){
    this.memberName = this.myForm.value?.memberName
    this.obj = {
      "fmId":  this.dataDetails.fmId,
      "gardId": this.gardId,
      "memberName": this.myForm.value?.memberName,
      "age": this.myForm.value?.age,
      "gender": this.myForm.value?.gender?.value,
      "bloodType": this.myForm.value?.bloodType,
      "healthInfo":this.myForm.value?.healthInfo,
      "allergies": this.myForm.value?.allergies,
      "image": "",
      "languages":this.myForm.value?.languages,  
      "memberCat": this.dataDetails.memberCat,
      "statusCd": "",
      "createDate": "",
      "createUser": null,
      "updateDate": null,
      "updateUser": null,
  }
  console.log(this.obj)
    this.dataApi.updateMember(this.obj).subscribe((result:any)=>{
      console.log(result);
      this.getResponse1.emit("edit");
        bootbox.alert({
         title: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+"Success Message"+"</span>  </i>",
         message: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+"Success Message"+"</span>  </i>",
         callback: function(){
             $('#editMember').modal('hide');
            } 
     });
     
     },(error:any)=>{
      console.log(error)
      this.messageService.add({severity:'error', summary: 'Error', detail:error.error.status});
       
     })
   }

   reset(){
     this.getResponse1.emit("edit");
    }

}
