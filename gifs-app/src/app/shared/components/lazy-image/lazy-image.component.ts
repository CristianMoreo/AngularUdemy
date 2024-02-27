import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{
  
  @Input()
  //Se le pone el signo de Admiracion para que el sistema sepa que siempre le va a llegar
  public url!:string;
  
  @Input()
  public alt:string = '';

  public hasLoaded: boolean = false;
  
  ngOnInit(): void {
   if (!this.url) {
    throw new Error('Method not implemented.');
    }  
  }

  onLoad(){
    setTimeout(() => {
      this.hasLoaded = true;
      
    }, 1000);
    
  }
  
}
