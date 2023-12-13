import { Component } from '@angular/core';
import { GifsService } from '../shared/services/gifs.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor(private gifsService:GifsService) {}

  get gifs() {
    return this.gifsService.gifList
  }

}
