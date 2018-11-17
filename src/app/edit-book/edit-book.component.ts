import {Component, OnInit} from '@angular/core';
import {EditBookService} from "../service/editbook.service";
import {GetBookService} from "../service/get-book.service";
import {Book} from "../model/book.model";
import {ActivatedRoute, Params} from "@angular/router";
import {UploadimageService} from "../service/uploadimage.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  isUpdated: boolean = false;
  newbook: Book = new Book()
  bookId: number
  selectedFile:File = null

  constructor(private editBookService: EditBookService, private getBookService: GetBookService,
              private activatedRoute: ActivatedRoute,private uploadImageService:UploadimageService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.bookId = Number.parseInt(param['id'])
      });

    this.getBookService.getBookById(this.bookId).subscribe(
      (book: Book) => {
        this.newbook = book
      },

      (error) => {
        console.log(error)
      }
    )
  }

  onUpdate(){
    this.editBookService.sendUpdatedBook(this.newbook).subscribe(

      (response) => {console.log(response)

        if(this.selectedFile != null){
          this.uploadImageService.uploadFile(this.bookId,this.selectedFile).subscribe(
            (response) =>{ console.log(response)},
            (error) => {console.log(error)}
          )
        }

        this.isUpdated = true;
      },
      (error) => {console.log(error)}
    )

  }

  updateImage(event){
    this.selectedFile = event.target.files[0]
  }

}
