import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
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
import {MaterialModule} from "./material.module";





@NgModule({

  declarations:[
    NavBarComponent,
    AddbookComponent,
    ViewbookComponent,
  ],

  imports:[
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AngularFontAwesomeModule,
    MaterialModule
  ],
  exports:[
    BrowserAnimationsModule,
    NavBarComponent,
    HttpClientModule,
    AddbookComponent,
    RouterModule,
    AngularFontAwesomeModule,
    MaterialModule


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
