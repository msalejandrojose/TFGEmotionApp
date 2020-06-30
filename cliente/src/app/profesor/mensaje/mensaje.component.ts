import { Component, OnInit } from '@angular/core';
import { ProfesorComponent } from '../profesor.component'

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  constructor(public profesor: ProfesorComponent) {}

  ngOnInit() {
  }

  abrirActividad(){
    //this.profesor.abrirUltimaActividad();
  }

}
