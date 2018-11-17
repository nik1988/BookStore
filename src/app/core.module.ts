import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule, MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {NavBarComponent} from "./admin-portal/nav-bar/nav-bar.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "./service/login.service";
import {FormsModule} from "@angular/forms";
import {AddbookComponent} from "./book/addbook/addbook.component";
import { RouterModule} from "@angular/router";
import {AddBookService} from "./service/addbook.service";
import {UploadimageService} from "./service/uploadimage.service";
import {BookListService} from "./service/booklist.service";;
import {ViewbookComponent} from "./book/viewbook/viewbook.component";
import {GetBookService} from "./service/get-book.service";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {EditBookService} from "./service/editbook.service";





@NgModule({

  declarations:[
    NavBarComponent,
    AddbookComponent,
    ViewbookComponent,
  ],

  imports:[
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    AngularFontAwesomeModule
  ],
  exports:[
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    NavBarComponent,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AddbookComponent,
    RouterModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    AngularFontAwesomeModule


  ],

  providers:[LoginService,
    AddBookService,
    UploadimageService,
    BookListService,
    GetBookService,
    EditBookService

  ]

})
export class CoreModule{

}
