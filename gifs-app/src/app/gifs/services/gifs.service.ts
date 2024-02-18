import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory :string[] = [];
  constructor() { }

  get tagHistory(){
    return [...this._tagHistory]
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {

      this._tagHistory = this._tagHistory.filter
      
    }
  }

  searchtag( tag:string):void{
    if (tag.length === 0) {
      return;
    }
    this._tagHistory.unshift(tag)
  }

}
