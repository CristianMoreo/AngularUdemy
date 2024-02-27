import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../services/interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-page-home',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor ( private gifService : GifsService){}

  get gifs(): Gif[]{    
    //Se retorna lo que retorne la la variable gifList que esta en el servicio gifService
    return this.gifService.gifList;
  }
}
