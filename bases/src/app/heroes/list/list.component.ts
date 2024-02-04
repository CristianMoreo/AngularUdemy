import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames:string[] = ['Spiderman','Hulk','Iroman','Robin'];
    public deleteHero?:string;

    removeLasthero():void{
      this.deleteHero = this.heroNames.pop();
    }
}
