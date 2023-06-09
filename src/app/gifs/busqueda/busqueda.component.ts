import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

@ViewChild('txtBuscar') txtBuscar!:ElementRef;

constructor(private GifsService: GifsService) {

}

 buscar(){
  
  const valor = this.txtBuscar.nativeElement.value;

  if ( valor === '' ){
    return
 }

 this.GifsService.buscarGifs( valor )

 this.txtBuscar.nativeElement.value = '';
 }


}
