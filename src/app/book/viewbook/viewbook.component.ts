import {Component, OnInit} from '@angular/core';
import {GetBookService} from "../../service/get-book.service";
import {Book} from "../../model/book.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  book: Book = new Book();
  id:number
  constructor(private viewBookService: GetBookService, private route:ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(
      (param: Params) => {
        this.id = param['id']
      }
    )


    this.viewBookService.getBookById(this.id).subscribe(
      (book) => {
        this.book = book;
        console.log(book)
      },
      (error) => {
        console.log(error)
      }
    )
  }

}



