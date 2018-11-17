import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  username: string
  password: string
  loggedIn: boolean = false

  ngOnInit() {

    this.loginService.validateSession().subscribe(

      (response:string) =>{
        this.loggedIn = true;

      },

      (error) =>{
        console.log("session not valid"+error);

        this.loggedIn = false;


      }
    )

  }

  onLogin(form: NgForm) {

     this.loginService.login(form.value.username, form.value.password).subscribe(
         (response:any) => {
           this.loggedIn = true;
           console.log("setting token value" +response.token)
           localStorage.setItem("token",response.token)

         },

       (error) =>{

           console.log(error)

       })

     }

}
