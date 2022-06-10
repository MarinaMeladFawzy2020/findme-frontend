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
  constructor( private dataApi : MemberlistService , private messageService: MessageService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'memberName':new FormControl('',[Validators.required]), //Validators.pattern("[0-9]{11}")
      'age':new FormControl('',[Validators.required]),
      'gender':new FormControl(''),
      'bloodType':new FormControl(''),
      'healthInfo':new FormControl(''),
      'allergies':new FormControl(''),
      'languages':new FormControl(''),
    })


  }

  onSubmit(){
    this.memberName = this.myForm.value?.memberName
    this.obj = {
      "fmId": 563,
      "gardId": 1,
      "memberName": "Afafed",
      "age": 70,
      "gender": "F",
      "bloodType": "A+",
      "healthInfo": "مشاكل بالقولون.. عندها نغزه لازم تشرب ميه بسكر للتغلب عليها ",
      "allergies": "لا يوجد",
      "image": "",
      "languages": "",
      "statusCd": "A",
      "createDate": "2022-04-13T23:31:31.000+00:00",
      "createUser": null,
      "updateDate": null,
      "updateUser": null,
      "memberCat": 1
  }
    this.dataApi.createMember(this.obj).subscribe((result:any)=>{
      console.log(result);
      if(result.code == 1){       
        bootbox.alert({
         title: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+"Success Message"+"</span>  </i>",
         message: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+ result.message+"</span>  </i>",
         callback: function(){
             $('#addMember').modal('hide');
             window.location.reload();

         }
     });
 
    
       }else{
         this.messageService.add({severity:'error', summary: 'Error', detail: result.message});
       }
       
     },(error:any)=>{
       console.log(error)
       this.messageService.add({severity:'error', summary: 'Error', detail:"error"});
       
     })
   }

   
 

}
