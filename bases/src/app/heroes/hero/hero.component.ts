import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent extends Component {
  public name: string = 'Iremman';
  public age: number = 45;


  getHeroDescription():string{
    
    return `${this.name} - ${this.age}`
  }

  changeAge():void{
    this.age = 88;
  }
  changeName(){
    this.name = 'Hulk';
  }
  
    
}
