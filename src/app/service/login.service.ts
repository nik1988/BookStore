import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class LoginService{

  constructor(private httpClient:HttpClient){

  }

   login(username:string, password:string):Observable<Response>{

         /*
            /token is needed at the end of the url to tell spring session in the back end that
            we need token in return for credentials.

          */

        let url = "http://localhost:8282/token";
        let encodedCredentials = btoa(username+":"+password);

        let header = new HttpHeaders().set('Authorization',"Basic "+encodedCredentials)
        header.append('Content-Type','application/x-www-form-urlencoded')

       return this.httpClient.get<Response>(url,{

         headers: header

       })
   }


   validateSession(){

    let url = "http://localhost:8282/test/checksession";

   let header = new HttpHeaders().set('x-auth-token',localStorage.getItem('token'))

     return this.httpClient.get(url,{
      headers:header
     })

   }


   logout()
   {
     let url = "http://localhost:8282/test/logout";

     let header = new HttpHeaders().set('x-auth-token',localStorage.getItem('token'))
     return this.httpClient.post(url,'',{
       headers:header
     })
   }




}
