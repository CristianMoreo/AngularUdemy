import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  
  public character:Character = {
    name:'',
    power:0
  };

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  emitCharacter():void{

    const val = this.character;
    console.log(this.character);
    
    if (this.character.name.length === 0) return;

    console.log(' antes del emit ', val);
    
    this.onNewCharacter.emit(val);


    console.log(' despues del emit ', val);
    this.character = {
      name:'',
      power:0
    };
    
  }
  

}
