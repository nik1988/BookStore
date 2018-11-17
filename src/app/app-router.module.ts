import {NgModule} from "@angular/core";
import {Route, RouterModule, Routes,RouterLinkWithHref,RouterLink} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AddbookComponent} from "./book/addbook/addbook.component";
import {BookListComponent} from "./book/book-list/book-list.component";
import {ViewbookComponent} from "./book/viewbook/viewbook.component";
import {EditBookComponent} from "./edit-book/edit-book.component";


const appRoutes:Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'addnewbook',component:AddbookComponent},
  {path:'bookList',component:BookListComponent},
  {path:'viewBook/:id',component:ViewbookComponent},
  {path:'editBook/:id',component:EditBookComponent}
  ]

@NgModule({

imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]

})
export class AppRouterModule{

}
