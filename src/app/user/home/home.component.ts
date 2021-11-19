import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ApidataService } from '../Services/apidata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource :any[];

  //storing local storage info
  name = localStorage.getItem('token');

  constructor(private apidata:ApidataService,private router:Router) { }

  ngOnInit(): void {
    this.getData()
  }


//Geeting user information from api
  getData():void{
    this.apidata.getData().subscribe(data => {
      console.log(data);
      this.dataSource = data;

    })
  }

  //Implementing LogOut 
  logOut():void{
    localStorage.removeItem('token')
    alert("successfully Logged out")
    this.router.navigate(['']);
  }
}
