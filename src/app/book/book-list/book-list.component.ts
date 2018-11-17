import {Component, Inject, OnInit} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookListService} from "../../service/booklist.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Observable} from "rxjs/internal/Observable";
import {forkJoin} from "rxjs/internal/observable/forkJoin";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book: Book[] = null;
  displayedColumns: string[] = ['select', 'Title', 'Author', 'Category', 'List Price', 'Our Price', 'Active', 'Operation'];
  allChecked: boolean
  selectedBook: Book;
  removeBookList: Book[] = [];

  constructor(private bookListService: BookListService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {

    this.allChecked = false;
    this.getBookList()

  }

  getBookList() {

    this.bookListService.getBookList().subscribe(
      (book: Book[]) => {
        console.log("get book called");
        this.book = book;

      },
      (error) => {
        console.log(error)
      }
    )


  }

  viewBook(book: Book) {

    this.selectedBook = book;
    console.log("selected book id = " + this.selectedBook.id)
    this.router.navigate(['/viewBook', this.selectedBook.id]);

  }

  updateRemoveBookList() {

    this.allChecked = !this.allChecked

    if (this.allChecked) {

      this.removeBookList = this.book.slice(0, this.book.length);

    }

    else {
      this.removeBookList.splice(0, this.book.length)
    }
  }

  removeBook(checked: boolean, book: Book) {

    if (checked) {
      console.log("adding book id  =" + book.id + "to remove list");

      this.removeBookList.push(book)
    }

    else {
      this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
    }

  }

  removeSelectedBooks() {

    const dialogRef = this.dialog.open(DeleteDialogComponent, {

      width: '350px',
      data: {name: ' All Selected Books'}
    })

    let observables = [];

    dialogRef.afterClosed().subscribe(
      (userResposne) => {

        if (userResposne == "ok") {

          for (let book of this.removeBookList) {

            observables.push(this.bookListService.removeBookBYId(book.id));
          }

           forkJoin(observables).subscribe(
            (response) => {
              console.log(response)
              this.getBookList();
            },
            (error) => {
              console.log(error)
            }
          )
        }
      }
    )

  }

  openDialog(book: Book) {

    const dialogRef = this.dialog.open(DeleteDialogComponent, {

      width: '350px',
      data: {name: book.title}
    })

    dialogRef.afterClosed().subscribe(
      (result) => {

        if (result == "ok") {
          this.bookListService.removeBookBYId(book.id).subscribe(
            (response: string) => {
              console.log(response)
              this.getBookList()  //update the array after removing book
            },
            (error) => {
              console.log(error)
            }
          )
        }

      }
    )

  }


}

@Component({

  selector: 'delete-dialog',
  templateUrl: './delete-dialog.html',
  styleUrls: ['./delete-dialog-style.css']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onCancel() {
    this.dialogRef.close("cancel");
  }


}
