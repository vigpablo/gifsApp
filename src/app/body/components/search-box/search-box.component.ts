import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'search-box',
  template: `<h5>Buscar</h5>
             <input type="text"
             class="form-control"
             placeholder="Buscar gifs..."
             (keyup.enter)="searchTag()"
             #txtInput>
             `
})

export class SearchBoxComponent  {

constructor (private gifsService: GifsService) {}

 @ViewChild('txtInput')
 tagInput!: ElementRef<HTMLInputElement>;




 searchTag() {
  const tag = this.tagInput.nativeElement.value;

  this.gifsService.searchTag(tag)

  this.tagInput.nativeElement.value = ''

 }


  }





