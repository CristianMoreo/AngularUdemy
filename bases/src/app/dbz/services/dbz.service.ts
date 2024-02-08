import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public character:Character[] = [{
    name:'krilim',
    power:1000
    },
    {
      name:'Goku',
      power:9500
    },
    {
      name:'Vegueta',
      power:7500
    }
  ]

  onNewCharacter(character:Character):void{
      console.log(character);
      console.log('Esto es lo que esta llegando ');
      
    this.character.push(character);
    
  }

  onDeleteCharacter(index:number):void{
    console.log(' si llega donde el slice ',index);
    
    this.character.splice(index,1);

  }
}
