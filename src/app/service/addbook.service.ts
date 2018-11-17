import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "../model/book.model";

@Injectable()
export class AddBookService{

  constructor(private httpClient:HttpClient){

  }

  addBook(book:Book)
  {

      let url = "http://localhost:8282/book/addbook"
      let header = new HttpHeaders().set("Content-Type","application/json")

     //header.append('x-auth-token',localStorage.getItem('token')) // currently token validation not working

      return this.httpClient.post(url,JSON.stringify(book),{headers:header})


  }


}
