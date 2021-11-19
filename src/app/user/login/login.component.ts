
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApidataService } from '../Services/apidata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {


  //implementing Reactive forms using formGroup 
  //declaring input variables
  form = new FormGroup ({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  })

  //It holds the user information if user enter valid credentials
  userdata : any;

  //variable for Loading Spinner
  value:boolean = true;

  //show or hide icon using 
  fieldTextType:boolean =true;

  //Constructor 
  constructor(private apiData:ApidataService,private router:Router) { }


  verify():void{
    //spinner activates when we set value false
    this.value = false;
    //cunsuming services 
    this.apiData.login(this.form.value).subscribe(data => {
      //assigning response to userdata
      this.userdata = data;
     // console.log(this.userdata)

     //checking weather user enter valid credentials 
      if(this.userdata === null ){

        alert("username password wrong")
        this.value =!this.value;
      }
      else {
       //alert(this.userdata.username);
        this.value =!this.value;
        //storing user data in local storage for authorization 
        localStorage.setItem('token',this.userdata.username)

        //navigating to home component
        this.router.navigate(['home'])
      }
    },(err => {
      alert("there is a problem with Web api ");
      this.value =!this.value;
    }))
  }
  //implemting show hide icon toggle
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  
}
