import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/shared/interfaces/gifs.interface';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  gifs: Gif[] = []


}
