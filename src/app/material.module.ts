import {NgModule} from "@angular/core";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
  MatFormFieldModule, MatGridListModule, MatInputModule, MatListModule, MatNativeDateModule,
  MatSelectModule,
  MatSlideToggleModule, MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations:[],
  imports:[

    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    CommonModule
  ],
  exports:[

    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
  ]
})
export class MaterialModule{

}
