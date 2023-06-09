import { Component } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  
  constructor(private GifsService: GifsService) {
  }


  // consumo el servicio
  get historial(){
    return this.GifsService.historial;
  }

  buscar(termino:string){
    this.GifsService.buscarGifs(termino)
  }
}
