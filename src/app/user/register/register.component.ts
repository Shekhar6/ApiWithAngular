import { Router } from '@angular/router';
import { UsernameValidators } from './customValidator/username.validator';
import { ApidataService } from '../Services/apidata.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fieldTextType : boolean;

//Implementing reactive forms for intializing controls 
  form = new FormGroup ({
    firstname : new FormControl('',[Validators.minLength(5),Validators.required,UsernameValidators.cannotContainSpace]),
    lastname : new FormControl('',[Validators.minLength(5),Validators.required,UsernameValidators.cannotContainSpace]),
    email : new FormControl('',[Validators.minLength(5),Validators.required,UsernameValidators.cannotContainSpace,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    mobile : new FormControl('',[Validators.minLength(10),Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]),
    password : new FormControl('',[Validators.minLength(5),Validators.required,UsernameValidators.cannotContainSpace]),
    username : new FormControl('',[Validators.minLength(5),Validators.required,UsernameValidators.cannotContainSpace])
  });
 

  constructor(private apiDataService:ApidataService,private router:Router) { }

  ngOnInit(): void {
    
  }


  //Submiting data to api
  onSubmit():void{
    console.log(this.form.value);

    this.apiDataService.postData(this.form.value).subscribe(data => {
      console.log("Post Api",data);

      if(data.id){
        alert("registered Successfully")
      this.router.navigate([''])
      }
    })

  }

  //Get accessor implementation 
  get firstname(){
    return this.form.get('firstname');
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  
}
