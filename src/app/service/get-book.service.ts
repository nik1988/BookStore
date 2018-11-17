import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book.model";
import {LocalUrl} from "./LocalUrl.service";

@Injectable()
export class GetBookService{

  constructor(private httpService:HttpClient){

  }
  getBookById(bookId:number){

    let url  = LocalUrl.getLocalUrl() + "/book/"+bookId
    return this.httpService.get<Book>(url)
      }


  }

