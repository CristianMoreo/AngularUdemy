import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  dataApi:any[] = []; 

  constructor(private apiServise:ApiService){

  }

  ngOnInit(): void {
      this.llenarData()
  }

  llenarData(){
    // Es la forma de obtener la respuesta del consumo del servicio y la respuesta se almacena en data
    this.apiServise.getData().subscribe((data)=>{
      // se le asigna a la variable
      this.dataApi = data;
      console.log(this.dataApi);
      
    })
  }
}
