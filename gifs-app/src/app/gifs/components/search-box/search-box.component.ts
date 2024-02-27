import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5> Buscar:</h5>
    <input type="text" class="form-control"
      placeholder="Buscar Gifs "
      (keyup.enter)="searchTag()"
      #txtTagInput>`,
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService ){ }
  // Info: Es la forma como puedo capturar la informacion del input de arriba
  // Se crea una propiedad donde con el signo ! se especifica que no puede ser nula y con el ElementRef
  // se especifica que es de tipo Input 
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag(){
    // Se captura el value del elemento tagInput
    const newTag = this.tagInput.nativeElement.value;
    // Se hace el llamado al servicio que adiciona el valor que tenga el input al array 
    this.gifsService.searchtag(newTag);

    this.tagInput.nativeElement.value='';    
  }
}
