import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Estudiante } from './Modelos/modelos';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private urlapi
    = 'http://localhost:5000/';



  constructor(private http: HttpClient) { }



  async getEstudiantes(){
    //console.log(this.http.get('/verEstudiantes'));
    /*let datos:Estudiante[];
    await $.getJSON("/verEstudiantes", function (data) {
      datos=data;
    });
    return datos;*/
    //return this.http.get<Estudiante[]>('localhost:5000/verEstudiantes');
    //let datos:Observable<Object[]> = this.http.get('http://localhost:5000/verEstudiantes');
    //return this.http.get('/verEstudiantes');
    //return null;

  }
}
