import { Component } from '@angular/core';
import { GifsService } from '../shared/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor (private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.copiaTagsArray
  }

  tagSearch(tag:string){
    return this.gifsService.searchTag(tag)
  }

}
