import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';
//habilitar lo comentado para activar el local storage
@Injectable({providedIn: 'root'})
export class GifsService {

  constructor(private http: HttpClient) {
    // this.loadLocalStorage()
   }

  private tagsArray: string [] = []
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs'
  private apiKey: string = 'mZFCfyfsxP4ggbw5uZjHS6BIHkBGlbyu'

  gifList: Gif [] = []

  get copiaTagsArray () {
    return this.tagsArray
  }

  organizeTags (tag:string) {

    tag = tag.toLowerCase()
    if (this.tagsArray.includes(tag)) {
      this.tagsArray = this.tagsArray.filter((oldTag) => oldTag !== tag) //igualo
    }
    this.tagsArray.unshift(tag)//no igualo, solo agrego elemento
    this.tagsArray = this.tagsArray.splice(0,10) //tengo que igualar porque el método toma a todo el array
                                                 //en su conjunto para modificarlo.
    // this.saveToLocalStorage()
  }

  // saveToLocalStorage():void {
  //   localStorage.setItem('tagsArray', JSON.stringify(this.tagsArray))
  // }

  // private loadLocalStorage():void {
  //   if (!localStorage.getItem('tagsArray')) return
  //   this.tagsArray = JSON.parse(localStorage.getItem('tagsArray')!)
  //   if (this.tagsArray.length === 0) return
  //   this.searchTag(this.tagsArray[0])
  // }

  searchTag(tag: string): void {
    if ( tag.length === 0) return;
    this.organizeTags(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe(resp => {this.gifList = resp.data; console.log(resp.data)})
  }

}




