import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private dataApi: ProfileService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'gardId':new FormControl('',[Validators.required ]),
      'gardName':new FormControl('',[Validators.required ]),
      'createUser':new FormControl('',[Validators.required ]),
      'email':new FormControl('',[Validators.required ,Validators.email]), //
      'password':new FormControl(''),
      'mobileNo':new FormControl('',[Validators.required , Validators.pattern("[0-9]{11}") ]),
      
    })


  }

  


  dataprofile(_f:any){
    this.edit = true;
    this.data = _f;


  }
  onSubmit(){
    console.log(this.myForm.value);
    this.dataApi.updateGuardian(  this.data.gardId, this.myForm.value , true).subscribe((result:any)=>{
      console.log(result)
 
      if(result.code == 1){
       // this.messageService.add({severity:'success', summary: 'Success', detail: result.message});
       this.getResponse.emit("hh");

        bootbox.alert({
          title: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+"Success Message"+"</span>  </i>",
          message: "<span style='color:#218838 ;font-weight: 400; font-size: 16px;'>"+ result.message+"</span>  </i>",
          callback: function(){
            $('#editprofile').modal('hide');

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
