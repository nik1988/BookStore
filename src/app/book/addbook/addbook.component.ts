import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book.model";
import {AddBookService} from "../../service/addbook.service";
import {UploadimageService} from "../../service/uploadimage.service";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  newbook:Book = new Book()
  bookAdded:boolean
  checked = true
  disabled = false
  currentFileUpload:File = null;

  constructor(private addBookService:AddBookService,private uploadImageService:UploadimageService) { }

  ngOnInit() {

    this.bookAdded = false;
    this.newbook.active = true;
    this.newbook.category = "Management";
    this.newbook.language = "english"
    this.newbook.format="paperback";
  }

  addBook() {
    this.addBookService.addBook(this.newbook).subscribe(
      (response:Book) => {
        this.bookAdded = true;
        console.log("book added sucessfully")
        console.log(response)

        if(this.currentFileUpload != null){
          //this.uploadFile(JSON.parse(JSON.parse(JSON.stringify(response))._body).id);
          console.log("id for book in response" +response.id);
          this.uploadFile(response.id)
        }

        this.newbook = new Book();
        this.newbook.active = true;
        this.newbook.category = "Management";
        this.newbook.language = "english"
        this.newbook.format = "paperback";
      },
      (error) => {
        console.log("error while adding book" + error);
      }
    )


  }

  selectFile(event){
    this.currentFileUpload = event.target.files.item(0);
  }

  uploadFile(bookid:number){

    //let selectedFileList:FileList = event.target.files;


    this.uploadImageService.uploadFile(bookid,this.currentFileUpload).subscribe(
      (response)  =>{
        console.log(response);
        console.log("Image Uploaded succesfully")
      }

    )



  }

}
