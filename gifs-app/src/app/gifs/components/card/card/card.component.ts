import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../../services/interfaces/gifs.interfaces';
import { empty } from 'rxjs';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  public gif!:Gif;

  //El metodo ngOnInit es para que se ejcute ahi mismo cargue el componente.
  ngOnInit(): void {
    if (!this.gif) {
        throw new Error('Gif property is required');
    }
  }
}
