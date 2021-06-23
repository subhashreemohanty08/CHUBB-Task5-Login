
    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute, Router } from '@angular/router';
    import { FormBuilder, Validators } from '@angular/forms';
    import { UserService } from '../user.service';
    
    
    
    @Component({
      selector: 'app-user-edit',
      templateUrl: './user-edit.component.html',
      styleUrls: ['./user-edit.component.css']
    })
    export class UserEditComponent implements OnInit {
      fb:FormBuilder=new FormBuilder;
      userForm:any;
    currentId:any;
    currentUserData:any;
      constructor(private activeRoute:ActivatedRoute,private userService:UserService,private route:Router) {
        this.currentId= activeRoute.snapshot.params.id
       }
    
      ngOnInit(): void {
      
        this.userForm=this.fb.group({
          userid:this.fb.control(0,[Validators.required]),
          username:this.fb.control("",Validators.required),
          age:this.fb.control(0,[Validators.min(18),Validators.max(60)]), 
          phonenumber:this.fb.control(0,[Validators.required]),
        })
        this.userService.returnUserById(this.currentId).subscribe((res)=>{
      
        this.userForm.patchValue('currentUserData')
      });
    }
    
    
    
    update(){
      this.userService.updateUserById(this.currentId,this.userForm.value).subscribe(()=>{
        this.route.navigate(["/user"])
      });
      
     
    }
    
    }
    