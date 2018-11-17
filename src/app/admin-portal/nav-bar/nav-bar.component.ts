import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  onLogin(){

  }

  logout(){
    console.log("log out method called")
    this.loginService.logout().subscribe(

      (response:string)=>{
        console.log("logged out successfully" +response);
        location.reload()
      },

      (error) =>{
        console.error("logout unsuccessfull");
        console.log(error);
      }
    )
  }

}
