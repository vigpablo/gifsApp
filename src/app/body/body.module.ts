import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    BodyComponent,
    SearchBoxComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule { }
