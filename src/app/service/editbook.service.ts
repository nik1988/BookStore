import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book.model";
import {LocalUrl} from "./LocalUrl.service";
import {GetBookService} from "./get-book.service";

@Injectable()
export class EditBookService{

  constructor(private httpService:HttpClient)
  {

  }

  sendUpdatedBook(book:Book){

    let url = LocalUrl.getLocalUrl()+"/book/UpdateBook";
    return this.httpService.post(url,book);



  }


}
