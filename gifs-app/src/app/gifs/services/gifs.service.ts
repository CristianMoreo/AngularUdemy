import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory :string[] = [];
  private apiKey:string = 'U8krodg6F531QCWFs0ZCBFVVzjLrCJuy';
  public gifList:any;

  constructor(private http:HttpClient) { }

  get tagHistory(){
    return [...this._tagHistory]
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {

      this._tagHistory = this._tagHistory.filter((oldTag) =>oldTag !== tag);

      this._tagHistory.unshift(tag);
      this._tagHistory = this.tagHistory.splice(0,10);
    }
  }

  searchtag( tag:string):void{  
    if (tag.length === 0) {
      return;
    }
    this.organizeHistory(tag);
    this._tagHistory.unshift(tag);

    this.http.get('https://api.giphy.com/v2/emoji?api_key=U8krodg6F531QCWFs0ZCBFVVzjLrCJuy&limit=10&offset=0')
      .subscribe( resp => {
        // Toca validar porque no me deja acceder a la posicion data 
        this.gifList = resp
        console.log(resp);
        
      })
    /*fetch('https://api.giphy.com/v2/emoji?api_key=U8krodg6F531QCWFs0ZCBFVVzjLrCJuy&limit=10&offset=0')
      .then(resp => resp.json())
      .then(data => console.log(data))*/
  }

}
