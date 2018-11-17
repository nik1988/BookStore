import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book.model";
import {LocalUrl} from "./LocalUrl.service";
import {text} from "@angular/core/src/render3/instructions";


@Injectable()
export class BookListService {

  constructor(private httpService: HttpClient) {

  }

  private url:string =  LocalUrl.getLocalUrl();

  getBookList() {

    const getBookUrl = this.url + "/book/viewBookList";

    return this.httpService.get<Book[]>(getBookUrl);
  }


  removeBookBYId(bookId: number) {

    const removeBookUrl = this.url + "/book/deleteBook/"+bookId;
    return this.httpService.delete(removeBookUrl, {
      responseType:'text'
    }

    );

  }

  testGit(){
    
  }

}
