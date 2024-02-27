import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from './interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = []
  private _tagHistory :string[] = [];
  private apiKey:string = 'U8krodg6F531QCWFs0ZCBFVVzjLrCJuy';
  private serviceUrl : string = 'https://api.giphy.com/v1/gifs/search';

  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  get tagHistory(){
    return [...this._tagHistory]
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) =>oldTag !== tag);
    }
      this._tagHistory.unshift(tag);
      this._tagHistory = this.tagHistory.splice(0,10);
      this.saveLocalStorage();
  }

  private saveLocalStorage():void {    
    localStorage.setItem('history',JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage():void{
    if (!localStorage.getItem('history')) {
      return;
    }
    this._tagHistory = JSON.parse( localStorage.getItem('history')! );
    console.log(this._tagHistory);
    
    this.searchtag(this._tagHistory[0])
  }

  async searchtag( tag:string):Promise<void>{  
    if (tag.length === 0) {
      return;
    }
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}`, {params})
      .subscribe( resp => {
        // Toca validar porque no me deja acceder a la posicion data 
        this.gifList = resp.data;
        
      })
    /*fetch('https://api.giphy.com/v2/emoji?api_key=U8krodg6F531QCWFs0ZCBFVVzjLrCJuy&limit=10&offset=0')
      .then(resp => resp.json())
      .then(data => console.log(data))*/
  }

}
