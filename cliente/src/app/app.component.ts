import { Component, ViewChild } from '@angular/core';
import { EstudianteService } from './estudiante.service'
import { ProfesorComponent } from './profesor/profesor.component'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';
  dentro = false;
  profesor = false;
  estudiante = false;
  actividadActual=false;

  @ViewChild(ProfesorComponent, { static: false }) pComponente: ProfesorComponent;

  constructor(private estudiantes: EstudianteService) {

  }

  video;
  visualizacion = false;
  acercaDe = false;
  privacidad = false;


  personaIniciada: Object = {
    _id: '',
    nombre: '',
    apellidos: '',
    clase: '',
    email: '',
    contrasena: '',
  };

  iniciarSesion(personal: Object) {
    this.personaIniciada = personal;
  }

  entrarHome() {
    if (this.profesor == true) {
      this.pComponente.abrirActividadActual();
      $('html, body').animate({scrollTop:0}, 'slow');
    }
  }

  abrirActividadActual(){
  this.pComponente.abrirActividadActual();
  $('html, body').animate({scrollTop:0}, 'slow');
  }
  abrirAlumnos(){
    this.pComponente.abrirAlumnos();
    $('html, body').animate({scrollTop:0}, 'slow');
  }
  abrirClases(){
    this.pComponente.abrirClases();
    $('html, body').animate({scrollTop:0}, 'slow');
  }
  abrirActividades(){
    this.pComponente.abrirActividades();
    $('html, body').animate({scrollTop:0}, 'slow');
  }
  abrirProfesor(){
    this.pComponente.abrirProfesores();
    $('html, body').animate({scrollTop:0}, 'slow');
  }
  activarActividadActual(){
    this.actividadActual=true;
    $('html, body').animate({scrollTop:0}, 'slow');
  }
  desactivarActividadActual(){
    this.actividadActual=false;
  }

  entrarProfesor() {
    this.dentro = true;
    this.profesor = true;
    this.cerrarAcercaDe();
    this.cerrarPrivacidad();
    $('html, body').animate({scrollTop:0}, 'slow');
    //console.log("Se ha accedido");
    //console.log(this.estudiantes.getEstudiantes());
  }

  entrarEstudiante() {
    this.dentro = true;
    this.estudiante = true;
    this.cerrarAcercaDe();
    this.cerrarPrivacidad();
    $('html, body').animate({scrollTop:0}, 'slow');
  }

  salir() {
    this.dentro = false;
    this.profesor = false;
    this.estudiante = false;
    this.personaIniciada = {
      _id: '',
      nombre: '',
      apellidos: '',
      clase: '',
      email: '',
      contrasena: '',
    };
    //this.video = document.getElementById('video');

  }

  ponerAcercaDe() {
    this.visualizacion = true;
    $('html, body').animate({scrollTop:0}, 'slow');
    this.acercaDe = true;
    this.privacidad=false;
    if(this.estudiante){
      document.getElementById("estudiante").style.display = "none";
    }
    if(this.profesor){
      document.getElementById("profesor").style.display = "none";
    }
    
    
  }
  ponerPrivacidad() {
    this.visualizacion = true;
    $('html, body').animate({scrollTop:0}, 'slow');
    this.privacidad = true;
    this.acercaDe=false;
    if(this.estudiante){
      document.getElementById("estudiante").style.display = "none";
    }
    if(this.profesor){
      document.getElementById("profesor").style.display = "none";
    }
  }
  cerrarAcercaDe(){
    try{
      this.visualizacion=false;
      this.acercaDe=false;
      if(this.estudiante){
        document.getElementById("estudiante").style.display = "block";
      }
      if(this.profesor){
        document.getElementById("profesor").style.display = "block";
      }
    }catch(e){

    }
    
  }
  cerrarPrivacidad(){
    try{
      this.visualizacion=false;
      this.privacidad=false;
      if(this.estudiante){
        document.getElementById("estudiante").style.display = "block";
      }
      if(this.profesor){
        document.getElementById("profesor").style.display = "block";
      }
    }catch(e){

    }
    
  }
}
