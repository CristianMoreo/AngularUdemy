import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {


  public character:Character[] = [{
      name:'krilim',
      power:1000
    },
    {
      name:'Goku',
      power:9500
    },
    {
      name:'Veguete',
      power:7500
    }
  ]

  onNewCharacter(character:Character):void{
      console.log(character);
      console.log('Esto es lo que esta llegando ');
      
    this.character.push(character);
    
  }

}
