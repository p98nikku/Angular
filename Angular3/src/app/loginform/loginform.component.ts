import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from './IUser';

function ageRange(min:number,max:number):ValidatorFn
{
  return (control:AbstractControl):{[key:string]:boolean }| null =>
    {
    if(control.value!==undefined && (isNaN(control.value) || control.value<min || control.value>max))
    {
      return{'ageRangeError':true};
    }
    return null;
  };
}
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  loginForm:FormGroup;
  phoneNumber:34567889;
  min=30;
  max=70;
  user:IUser={
    email:"neetika.paliwal@taazaa.com",
    password:"123456789"
  };
  
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      age:new FormControl(null,[ageRange(this.min,this.max)]),
      phoneNumber:new FormControl(null,[]),
      notification: new FormControl('email',[])
    });
  }
  login(){
    console.log(this.loginForm.value);
    console.log(this.user);
  }
  cancel(){
    this.loginForm.reset();
  }

  formChangeValueChanged()
  {
    const phoneControl=this.loginForm?.get('phoneNumber');
    this.loginForm.get('notification')?.valueChanges.subscribe((data:string)=>{
      console.log(data);
      if(data=='phone'){
        phoneControl?.setValidators([Validators.required])
      }
      else if(data=='email')
      {
        phoneControl?.clearValidators();
      }
      phoneControl?.updateValueAndValidity();
    })
  }
}
