import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from "./core.module";
import { LoginComponent } from './login/login.component';
import {AppRouterModule} from "./app-router.module";
import {FormsModule} from "@angular/forms";
import {BookListComponent, DeleteDialogComponent} from './book/book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookListComponent,
    EditBookComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRouterModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DeleteDialogComponent]
})
export class AppModule {

}
